import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Main } from '../main/main';
import { Menu } from '../menu/menu';
import { MenuOption } from '../../types/menu-option';
import { getRoutes } from '../../../app.routes';

@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Header, Footer, Main, Menu],
  template: `
    <ind-header [mainTitle]="title()" [subtitle]="subtitle()">
      <ind-menu id="menu" [options]="menuOptions" />
    </ind-header>
    <ind-main>
      <router-outlet />
    </ind-main>
    <ind-footer />
  `,
  styles: `
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `,
})
export class App {
  protected readonly title = signal('Angular 22');
  protected readonly subtitle = signal('Aprende a desarrollar aplicaciones con Angular');

  protected readonly menuOptions: MenuOption[] = getRoutes();

}

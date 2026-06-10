import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Main } from '../main/main';
import { Menu } from '../menu/menu';

@Component({
  selector: 'ind-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    Main,
    Menu,
  ],
  template: `
    <ind-header>
      <ind-menu id="menu" />
    </ind-header>
    <ind-main >
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
  // protected readonly title = signal('Demo-01');
}

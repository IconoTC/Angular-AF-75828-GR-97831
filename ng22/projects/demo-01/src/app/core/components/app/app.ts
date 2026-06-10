import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sample } from '../sample/sample';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Main } from '../main/main';
import { Menu } from '../menu/menu';
import { Card } from '../card/card';
import DashboardPage from '../../../features/dashboard/dashboard-page';
import ProductsPage from '../../../features/products/products-page';

@Component({
  selector: 'ind-root',
  imports: [
    RouterOutlet,
    Sample,
    Header,
    Footer,
    Main,
    Menu,
    Card,
    DashboardPage,
    ProductsPage,
  ],
  template: `
    <ind-header>
      <ind-menu id="menu" />
    </ind-header>
    <ind-main >
      <ind-card id="home">
        <p>App works!</p>
      </ind-card>
      <ind-card>
        <ind-sample />
      </ind-card>
      <router-outlet />
      <ind-dashboard-page id="dashboard" />
      <ind-products-page id="products" />
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

import { Component } from '@angular/core';
import { MenuOption } from '../../types/menu-option';

@Component({
  selector: 'ind-menu',
  imports: [],
  template: `
    <nav>
      <menu>
        @for (item of options; track item.label) {
          <li>
            <a [href]="item.path">{{ item.label }}</a>
          </li>
        }
      </menu>
    </nav>
  `,
  styles: `
    menu {
      list-style: none;
      display: flex;
      gap: 1rem;
      padding: 0;
      margin: 0;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  `,
})
export class Menu {
  protected readonly options: MenuOption[] = [
    { label: 'Inicio', path: '#home' },
    { label: 'Dashboard', path: '#dashboard' },
    { label: 'Productos', path: '#products' },
    { label: 'Nosotros', path: '#about' },
  ];
}

import { Component, input } from '@angular/core';
import { MenuOption } from '../../types/menu-option';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ind-menu',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <menu>
        @for (item of options(); track item.label) {
          <li>
            <a [routerLink]="item.path"
            [routerLinkActive]="'active'"
            >{{ item.label }}</a>
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

    .active {
      font-weight: bold;
      border-bottom: 2px solid currentColor;
    }
  `,
})
export class Menu {
readonly options = input.required<MenuOption[]>();
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-footer',
  imports: [],
  template: `
    <footer>
      <address>{{ company() }}</address>
    </footer>
  `,
  styles: `
    :host {
      display: block;
      background-color: #f0f0f0;
      padding: 1rem;
      text-align: center;
    }
  `,
})
export class Footer {
  protected readonly company = signal('Icono Training');
}

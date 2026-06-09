import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-header',
  imports: [],
  template: `
    <header>
      <ng-content select="#logo" />
      <img src="favicon.ico" alt="Logo" width="50" height="50" />
      <h1>{{ title() }}</h1>
      <ng-content select="#menu" />
    </header>
    <p>{{ subtitle() }}</p>
  `,
  styles: `
    :host {
      display: block;
      background-color: #f0f0f0;
      padding: 1rem;
      text-align: center;
    }

    header {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }

    p {
      margin-top: 0.5rem;
    }
  `,
})
export class Header {
  protected readonly title = signal('Angular 22');
  protected readonly subtitle = signal('Aprende a desarrollar aplicaciones con Angular');
}

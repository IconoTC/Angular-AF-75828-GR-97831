import { Component, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ind-sample',
  imports: [],
  encapsulation: ViewEncapsulation.Emulated,
  template: `
      <h2>{{ title().toUpperCase() }}</h2>
      <p [title]="title()">sample works!</p>
      <img [src]="img()" alt="Angular Logo" width="100" />
      <div>
        <button (click)="showAlert()">Haz click</button>
      </div>
  `,
  styles: `
    :host {
      display: block;
      padding: 1rem;
      background-color: var(--gray-700);
      color: white;
      border-radius: 0.5rem;
      margin: 1rem;
    }
    h2,
    p {
      color: var(--vivid-pink);
    }
  `,
})
export class Sample {
  protected readonly title = signal('Sample Component');
  protected readonly img = signal('angular-logo.svg');

  protected showAlert(): void {
    alert('Button clicked!');
  }
}

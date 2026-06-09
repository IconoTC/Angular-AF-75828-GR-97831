import { Component } from '@angular/core';

@Component({
  selector: 'ind-card',
  imports: [],
  template: `<ng-content />`,
  styles: `
  :host {
    display: block;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    max-width: 300px;
    margin: 1rem auto;
  }
`,
})
export class Card {}

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-search',
  imports: [FormsModule],
  template: `
    <!-- <input type="text" placeholder="Search products..."
    [value]="text()" (input)="text.set($event.target.value)"/> -->

    <input type="text" placeholder="Search products..." [(ngModel)]="text" />
    <p>{{ text() === '' ? 'Esperando tu búsqueda' : 'Searching for ' + text() }}</p>
    <button (click)="text.set('')">Reset</button>
  `,
  styles: ``,
})
export class Search {
  protected readonly text = signal('');
}

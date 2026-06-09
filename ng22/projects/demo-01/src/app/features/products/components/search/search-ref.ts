import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-search-ref',
  imports: [FormsModule],
  template: `
    <input type="text" placeholder="Search products..." id="searchInput"
      #searchInput
      [(ngModel)]="searchInput.value" />

    <p>{{ searchInput.value === '' ? 'Esperando tu búsqueda' : 'Searching for ' + searchInput.value }}</p>
    <button (click)="searchInput.value = ''">Reset</button>
  `,
  styles: ``,
})
export class SearchRef {}

import { Component, viewChild, ElementRef, effect } from '@angular/core';
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
export class SearchRef {

  protected readonly searchInputElement = viewChild<ElementRef>('searchInput');

  constructor() {
    console.log('Constructor');
    console.log(this.searchInputElement());

    effect(() => {
      console.log('Effect');
      console.log(this.searchInputElement());
      console.dir(this.searchInputElement()?.nativeElement);
    })

  }

  // ngOnInit() {
  //   console.log('OnInit');
  //   console.log(this.searchInputElement());
  //   console.dir(this.searchInputElement()?.nativeElement);
  // }
}

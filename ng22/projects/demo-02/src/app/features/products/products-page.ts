import { Component, inject } from '@angular/core';
import { Search } from './components/search/search';
import { SearchRef } from './components/search/search-ref';
import { Card } from '../../core/components/card/card';
import { TimeOld } from '../../core/services/time';

@Component({
  selector: 'ind-products-page',
  imports: [Search, SearchRef, Card],
  template: `
    <h2>Products</h2>
    <ind-card>
      <ind-search />
    </ind-card>
    <ind-card>
      <ind-search-ref />
    </ind-card>
  `,
  styles: ``,
})
export default class ProductsPage {
  private time = inject(TimeOld);

  constructor() {
    console.log('ProductsPage constructor', this.time.getTime());
  }
}

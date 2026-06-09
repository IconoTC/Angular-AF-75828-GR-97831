import { Component } from '@angular/core';
import { Search } from './components/search/search';
import { SearchRef } from './components/search/search-ref';
import { Card } from '../../core/components/card/card';

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
export default class ProductsPage {}

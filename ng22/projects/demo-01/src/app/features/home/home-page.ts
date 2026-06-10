import { Component } from '@angular/core';
import { Sample } from './components/sample/sample';
import { Card } from '../../core/components/card/card';

@Component({
  selector: 'ind-home-page',
  imports: [Sample, Card],
  template: `
    <h2>Home</h2>
    <ind-card id="home" cardTitle="Sample">
      <p>App works!</p>
    </ind-card>
    <ind-card>
      <ind-sample />
    </ind-card>
  `,
  styles: ``,
})
export default class HomePage {}

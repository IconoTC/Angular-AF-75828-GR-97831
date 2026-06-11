import { Component } from '@angular/core';

import { Card } from '../../core/components/card/card';
import { Register } from './components/register/register';

@Component({
  selector: 'ind-home-page',
  imports: [Card, Register],
  template: `
    <h2>Home</h2>
    <ind-card id="home" cardTitle="Sample">
      <p>App works!</p>
    </ind-card>
    <ind-card>
        <ind-register />

    </ind-card>
  `,
  styles: ``,
})
export default class HomePage {}

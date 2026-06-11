import { Component } from '@angular/core';
import { Sample } from './components/sample/sample';


@Component({
  selector: 'ind-about-page',
  imports: [Sample],
  template: ` 
    <h2>About</h2> 
    <ind-sample />
    `,
  styles: ``,
})
export default class AboutPage {}

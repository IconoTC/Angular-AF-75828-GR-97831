import { Component } from '@angular/core';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'ind-dashboard-page',
  imports: [Counter],
  template: `
    <h2>Dashboard</h2>
    <ind-counter />
  `,
  styles: ``,
})
export default class DashboardPage {}

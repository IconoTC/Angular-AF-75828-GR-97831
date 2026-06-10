import { Component } from '@angular/core';
import { CountersList } from './components/counters-list/counters-list';

@Component({
  selector: 'ind-dashboard-page',
  imports: [CountersList],
  template: `
    <h2>Dashboard</h2>
    <ind-counters-list />
  `,
  styles: ``,
})
export default class DashboardPage {}

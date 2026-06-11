import { Component, inject } from '@angular/core';
import { CountersList } from './components/counters-list/counters-list';
import { Time, TimeOld } from '../../core/services/time';

@Component({
  selector: 'ind-dashboard-page',
  imports: [CountersList],
  template: `
    <h2>Dashboard</h2>
    <ind-counters-list />
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
      padding: 1rem;
    }
    h2 {
      margin-bottom: 1rem;
      text-align: center;
    }
  `,
})
export default class DashboardPage {
  time = inject(Time);

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private timeOld: TimeOld) {
    console.log('DashboardPage constructor', this.timeOld.getTime());
    console.log('DashboardPage constructor', this.time.getTime());
  }
}

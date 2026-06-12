import { Component, signal } from '@angular/core';
import { Card } from '../../../../core/components/card/card';
import { Counter } from '../counter/counter';

@Component({
  selector: 'ind-counters-list',
  imports: [Counter, Card],
  template: `
    <p>Total: {{ total() }}</p>
    <p>Total Clicks: {{ totalClicks() }}</p>
    <div>
      <ind-card>
        <ind-counter [id]="1" (clickEvent)="handleClicks($event)"/>
      </ind-card>
      <ind-card>
        <ind-counter [id]="2" (clickEvent)="handleClicks($event)"/>
      </ind-card>
      <ind-card>
        <ind-counter [id]="3" (clickEvent)="handleClicks($event)"/>
      </ind-card>
    </div>
  `,
  styles: `

    div {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }
  `,
})
export class CountersList {
  protected readonly total = signal(0);
  protected readonly totalClicks = signal(0);

  handleClicks(delta: number) {
    this.total.update((value) => value + delta);
    this.totalClicks.update((value) => value + 1);
  }
}

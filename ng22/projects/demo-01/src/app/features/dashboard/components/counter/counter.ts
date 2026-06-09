import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-counter',
  imports: [],
  template: `
    <p>
      Clicks: <output class="clicks">{{ clicks() }}</output>
    </p>
    <!-- <p>Value: <output [class]="count() < 0 ? 'negative' : ''" class="value">{{ count() }}</output></p> -->
    <!-- <p>Value: <output [class]="{negative: count() < 0}" class="value">{{ count() }}</output></p> -->
    <p>
      Value: <output [class.negative]="count() < 0" class="value">{{ count() }}</output>
    </p>

    @if (count() >= limit()) {
      <p>Has alcanzado el límite de {{ limit() }}</p>
    } @else if (count() <= -limit()) {
      <p>Has alcanzado el límite de -{{ limit() }}</p>
    }

    <div>
      <button (click)="changeCount(1)" [disabled]="count() >= limit()">➕</button>
      <button (click)="changeCount(-1)" [disabled]="count() <= -limit()">➖</button>
      <button (click)="resetCount()" [disabled]="count() === 0">Reset</button>
      <button (click)="changeCountAsync()" [disabled]="count() >= limit()">➕ Async</button>
    </div>
  `,
  styles: `
    div {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .negative {
      color: red;
    }
  `,
})
export class Counter {
  protected readonly limit = signal(5);
  protected readonly clicks = signal(0);
  protected readonly count = signal(0);

  // GETTER de la signal
  // this.clicks()
  // SETTERS de la signal
  // this.clicks.set()
  // this.clicks.update()

  changeCount(delta: number) {
    this.clicks.update((value) => value + 1);
    if (delta > 0 && this.count() >= this.limit()) {
      return;
    }
    if (delta < 0 && this.count() <= -this.limit()) {
      return;
    }
    this.count.update((value) => value + delta);
  }

  resetCount() {
    this.clicks.set(0);
    this.count.set(0);
  }
  changeCountAsync() {
    setTimeout(() => {
      this.clicks.update((value) => value + 1);
      this.count.update((value) => value + 1);
      console.log(`Clicks: ${this.clicks}`);
    }, 1000);
  }
}

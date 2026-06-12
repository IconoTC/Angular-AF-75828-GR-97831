import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-footer',
  imports: [DatePipe, TitleCasePipe],
  template: `
    <footer>
      <address>{{ company() }}</address>
      <p>{{ currentDate() | date: 'fullDate' | titlecase }}</p>
    </footer>
  `,
  styles: `
    :host {
      display: block;
      background-color: #f0f0f0;
      padding: 1rem;
      text-align: center;
    }
  `,
})
export class Footer {
  protected readonly company = signal('Icono Training');
  protected readonly currentDate = signal(new Date());
}

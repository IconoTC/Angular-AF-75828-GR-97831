import { Component } from '@angular/core';

@Component({
  selector: 'ind-main',
  imports: [],
  template: `
    <main>
      <ng-content />
    </main>
  `,
  styles: `
    main {
      width: 100%;
      min-height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      position: relative;
    }
  `,
})
export class Main {}

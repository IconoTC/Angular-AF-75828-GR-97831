import { Component, computed, inject, input } from '@angular/core';
import { NotesStore } from '../../../store/notes-store';

@Component({
  selector: 'ind-header',
  imports: [],
  template: `
    <header>
  
      <ng-content select="#logo" />
      <img src="favicon.ico" alt="Logo" width="50" height="50" />
      <p>Notas: {{ notesCount() }}</p>
  
      <h1>{{ title() }}</h1>
      <div class="menu">
        <ng-content select="#menu" />

      </div>
    </header>
    <p>{{ subtitle() }}</p>
  `,
  styles: `
    :host {
      display: block;
      background-color: #f0f0f0;
      padding: 1rem;
      text-align: center;
    }

    header {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
    }

    .menu {
      grid-column: span 2;
    }

    p {
      margin-top: 0.5rem;
    }
  `,
})
export class Header {

  private readonly state = inject(NotesStore);

  protected readonly notesCount = computed(
    () => this.state.notes().length);
  
  readonly title = input.required<string>({
    // eslint-disable-next-line @angular-eslint/no-input-rename
    alias: 'mainTitle',
  });
  readonly subtitle = input.required<string>();
}

import { Component, inject, input } from '@angular/core';
import { Note } from '../../types/note';
import { Card } from '../../../../core/components/card/card';
import { NotesStore } from '../../../../store/notes-store';

@Component({
  selector: 'ind-note-item',
  imports: [Card],
  template: `
    <!-- @let note = note(); -->

    <ind-card [cardTitle]="note().title">
      <p>{{ note().id }}</p>
      <p>{{ note().author }}</p>
      <label>
        <input type="checkbox" [checked]="note().isImportant" (change)="invokeChange()" />
        Important
      </label>
      <button (click)="invokeDelete()">Borrar</button>
    </ind-card>
  `,
  styles: `
    label {
      display: block;
    }
  `,
})
export class NoteItem {
  note = input.required<Note>();

  protected readonly state = inject(NotesStore);

  invokeDelete() {
    this.state.deleteNote(this.note().id);
  }

  invokeChange() {
    const note = {
      ...this.note(),
      isImportant: !this.note().isImportant,
    };
    this.state.updateNote(note);
  }
}

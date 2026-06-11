import { Component, input, output } from '@angular/core';
import { Note } from '../../types/note';
import { Card } from '../../../../core/components/card/card';

@Component({
  selector: 'ind-note-item',
  imports: [Card],
  template: `
    <!-- @let note = note(); -->

    <ind-card [cardTitle]="note().title">
      <p>{{ note().id }}</p>
      <p>{{ note().author }}</p>
      <label>
        <input type="checkbox" [checked]="note().isImportant" (change)="emitChange()" />
        Important
      </label>
      <button (click)="emitDelete()">Borrar</button>
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

  deleteEvent = output<Note['id']>();
  changeEvent = output<Note['id']>();

  emitDelete() {
    this.deleteEvent.emit(this.note().id);
  }

  emitChange() {
    this.changeEvent.emit(this.note().id);
  }
}

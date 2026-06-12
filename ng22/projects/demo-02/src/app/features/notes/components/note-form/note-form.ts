import { Component, inject, signal } from '@angular/core';
import { NoteDTO } from '../../types/note';
import { JsonPipe } from '@angular/common';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { NotesStore } from '../../../../store/notes-store';

@Component({
  selector: 'ind-note-form',
  imports: [JsonPipe, FormField, FormRoot],
  template: `
    <p>Signal Form</p>
    <form [formRoot]="noteForm">
      <label class="form-control">
        Título:
        <input type="text" [formField]="noteForm.title" />
      </label>
      <label class="form-control">
        Autor:
        <input type="text" [formField]="noteForm.author" />
      </label>
      <button type="submit">Agregar nota</button>
    </form>

    <pre>{{ noteData() | json }}</pre>
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-control {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `,
})
export class NoteForm {
  // protected addEvent = output();
  protected readonly state = inject(NotesStore);

  private readonly initialNoteData: NoteDTO = {
    title: '',
    author: '',
    isImportant: false,
  };

  protected readonly noteData = signal<NoteDTO>(this.initialNoteData);

  protected readonly noteForm = form(this.noteData, {
    submission: {
      action: async (f) => {
        this.invokeAddNote();
        f().reset(this.initialNoteData);
      },
    },
  });

  protected invokeAddNote() {
    // const data: NoteDTO ={ ...ngForm.value, isImportant: false };
    // this.noteForm.
    console.log('Emitiendo evento para agregar nota:', this.noteData);
    this.state.addNote(this.noteData());
    // this.addEvent.emit();
  }
}

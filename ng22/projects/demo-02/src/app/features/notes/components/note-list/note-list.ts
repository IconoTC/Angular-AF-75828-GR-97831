import { Component, effect, ElementRef, inject, viewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { NoteForm } from '../note-form/note-form';
import { NoteItem } from '../note-item/note-item';
import { Card } from '../../../../core/components/card/card';
import { NotesStore } from '../../../../store/notes-store';

@Component({
  selector: 'ind-note-list',
  imports: [JsonPipe, NoteForm, NoteItem, Card],
  template: `
    <p>Note List with State</p>
    <details #details>
      <summary>Add Note</summary>
      <ind-note-form />
    </details>

    @if (this.state.notes().length === 0) {
      @if (this.state.isLoading()) {
        <p>Cargando tareas....</p>
      } @else if (this.state.error()) {
        <ind-card>
          <p>{{ this.state.error() }}</p>
        </ind-card>
      }
    } @else {
      <ul>
        @for (note of this.state.notes(); track note.id) {
          <li>
            <ind-note-item
              [note]="note"
            />
          </li>
        }
      </ul>
      <!--
        Ayuda para ver las tareas inicialmente
        -->
      <pre>{{ this.state.notes() | json }}</pre>
    }
  `,
  styles: `
    ul {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
      gap: 1rem;
    }
  `,
})
export class NoteList {
  // Inyección del Repo que usa LocalStorage
  // private readonly repo: RepositoryRx<Note, NoteDTO> = inject(NotesLocalRxRepo);

  // Inyección del Repo que usa un API Rest
  //private readonly repo: RepositoryRx<Note, NoteDTO> = inject(NotesApiRepo);

  protected readonly state = inject(NotesStore);
  protected readonly details = viewChild<ElementRef<HTMLDetailsElement>>('details');


  constructor() {
    // this.state.loadNotes();

    effect(() => {
      // console.log('Notas actualizadas:', this.state.notes());
      // document.title = `Notas (${this.state.notes().length}) | Demo 02`;

      const detail = this.details() as ElementRef<HTMLDetailsElement>;
      if ( this.state.notes().length > 0 && detail.nativeElement.open) {
        detail.nativeElement.open = false;
      }
    })

  }


  // Alternativamente, si no queremos efectos
  // Usaremos un evento desde ind-form 
  // protected addNote() {
    // const detail = this.details() as ElementRef<HTMLDetailsElement>;
    // detail.nativeElement.open = false;
  // }

}

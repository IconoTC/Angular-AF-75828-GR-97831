import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Note, NoteDTO } from '../../types/note';
import TASKS from '../../data/notes-data.json';
import { JsonPipe } from '@angular/common';
import { NoteForm } from '../note-form/note-form';
import { NoteItem } from '../note-item/note-item';

@Component({
  selector: 'ind-note-list',
  imports: [JsonPipe, NoteForm, NoteItem],
  template: `
    <details #details>
      <summary>Add Note</summary>
      <ind-note-form (addEvent)="addNote($event)" />
    </details>

    @if (notes().length === 0) {
      <p>Cargando tareas....</p>
    } @else {
      <ul>
        @for (note of notes(); track note.id) {
          <li>
            <ind-note-item
              [note]="note"
              (deleteEvent)="deleteNote($event)"
              (changeEvent)="updateNote($event)"
            />
          </li>
        }
      </ul>
      <!--
        Ayuda para ver las tareas inicialmente
        -->
      <pre>{{ notes() | json }}</pre>
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
  protected readonly notes = signal<Note[]>([]);
  protected readonly details = viewChild<ElementRef<HTMLDetailsElement>>('details');

  constructor() {
    this.loadNotes();
  }

  private generateId(): string {
    while (true) {
      const id = crypto.randomUUID().substring(1, 6);
      // Verificar que el ID no exista ya
      if (!this.notes().some((note) => note.id === id)) {
        return id;
      }
    }
  }

  protected loadNotes() {
    // Simulación de carga de tareas desde una API
    setTimeout(() => {
      this.notes.set(TASKS);
    }, 1000);
  }

  protected addNote(noteData: NoteDTO) {
    console.log('Add new note:', noteData);

    const newNote: Note = {
      id: this.generateId(), // Genera un ID aleatorio
      ...noteData,
    };

    this.notes.update((notes) => [...notes, newNote]);
    (this.details() as ElementRef<HTMLDetailsElement>).nativeElement.open = false; // Cerrar el detalle después de agregar la tarea
  }

  protected deleteNote(noteId: Note['id']) {
    console.log('Delete note with id:', noteId);
    this.notes.update((notes) => notes.filter((note) => note.id !== noteId));
  }

  protected updateNote(noteId: Note['id']) {
    console.log('Update note with id:', noteId);
    this.notes.update((notes) => {
      return notes.map((note) => {
        if (note.id === noteId) {
          return { ...note, isImportant: !note.isImportant };
        }
        return note;
      });
    });
  }
}

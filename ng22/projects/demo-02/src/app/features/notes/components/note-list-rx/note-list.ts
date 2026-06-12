import { Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Note, NoteDTO } from '../../types/note';
import { JsonPipe } from '@angular/common';
import { NoteForm } from '../note-form/note-form';
import { NoteItem } from '../note-item/note-item';
import { RepositoryRx } from '../../../../core/types/repository-rx';
// import { NotesLocalRxRepo } from '../../services/notes-local-rx-repo';
import { NotesApiRepo } from '../../services/notes-api-repo';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
import { Card } from '../../../../core/components/card/card';

@Component({
  selector: 'ind-note-list',
  imports: [JsonPipe, NoteForm, NoteItem, Card],
  template: `
    <p>Note List Rx</p>
    <details #details>
      <summary>Add Note</summary>
      <ind-note-form (addEvent)="addNote($event)" />
    </details>

    @if (notes().length === 0) {
      @if (isLoading()) {
        <p>Cargando tareas....</p>
      } @else if (error()) {
        <ind-card>
          <p>{{ error() }}</p>
        </ind-card>
      }
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
  // Inyección del Repo que usa LocalStorage
  // private readonly repo: RepositoryRx<Note, NoteDTO> = inject(NotesLocalRxRepo);

  // Inyección del Repo que usa un API Rest
  private readonly repo: RepositoryRx<Note, NoteDTO> = inject(NotesApiRepo);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly details = viewChild<ElementRef<HTMLDetailsElement>>('details');

  protected readonly notes = signal<Note[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly error = signal<string | null>(null);

  constructor() {
    this.loadNotes();
  }

  protected loadNotes() {
    // Simulación de carga de tareas desde una API
    this.repo
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (notes) => {
          this.notes.set(notes);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error loading notes:', error);
          this.error.set('Failed to load notes. Please try again later.');
        },
        complete: () => console.log('Notes loading completed'),
      });
  }

  protected addNote(noteData: NoteDTO) {
    console.log('Add new note:', noteData);

    // Asyncrona -> servicio Repo

    this.repo
      .create(noteData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (newNote) => {
          // Sincrona -> State local (Signal)
          this.notes.update((notes) => [...notes, newNote]);
          // Cerrar el detalle después de agregar la tarea
          (this.details() as ElementRef<HTMLDetailsElement>).nativeElement.open = false;
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error adding note:', error);
          this.error.set('Failed to add note. Please try again later.');
        },
      });
  }

  protected deleteNote(noteId: Note['id']) {
    console.log('Delete note with id:', noteId);
    this.repo
      .delete(noteId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.notes.update((notes) => notes.filter((note) => note.id !== noteId));
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error deleting note:', error);
          this.error.set('Failed to delete note. Please try again later.');
        },
      });
  }

  protected updateNote(note: Note) {
    console.log('Update note with id:', note.id);

    this.repo
      .update(note.id, note)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (updatedNote) => {
          this.notes.update((notes) => {
            return notes.map((n) => (n.id === updatedNote.id ? updatedNote : n));
          });
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error updating note:', error);
          this.error.set('Failed to update note. Please try again later.');
        },
      });
  }
}

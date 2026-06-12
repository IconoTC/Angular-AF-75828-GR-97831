import { DestroyRef, inject, Service, signal } from '@angular/core';
import { RepositoryRx } from '../core/types/repository-rx';
import { NotesApiRepo } from '../features/notes/services/notes-api-repo';
import { Note, NoteDTO } from '../features/notes/types/note';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
// import { BehaviorSubject } from 'rxjs';

// interface Store<T, DTD> {
  // error: Signal<string | null>;
  // isLoading: Signal<boolean>;
  // items: Signal<T[]>;
  //   load<DTO>(repo: RepositoryRx<T, DTO>): void;
  //   add<DTO>(repo: RepositoryRx<T, DTO>, item: DTO): void;
  //   update<DTO>(repo: RepositoryRx<T, DTO>, id: T['id'], item: Partial<DTO>): void;
  //   delete(repo: RepositoryRx<T, any>, id: T['id']): void;
//}

@Service()
export class NotesStore {
  private readonly repo: RepositoryRx<Note, NoteDTO> = inject(NotesApiRepo);

  // planteamiento con RXJs:
  // BehaviorSubject para manejar el estado de las notas

  // private readonly notes = new BehaviorSubject<Note[]>([]);
  // public readonly notes$ = this.notes.asObservable();

  readonly #notes = signal<Note[]>([]);
  public readonly notes = this.#notes.asReadonly();
  // public readonly notes = computed(() => this._notes());
  readonly #isLoading = signal(false);
  public readonly isLoading = this.#isLoading.asReadonly();
  readonly #error = signal<string | null>(null);
  public readonly error = this.#error.asReadonly();

  private readonly destroyRef = inject(DestroyRef);

  public loadNotes() {
    this.#isLoading.set(true);
    this.repo
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (notes) => {
          this.#notes.set(notes);
          this.#isLoading.set(false);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error loading notes:', error);
          this.#error.set('Failed to load notes. Please try again later.');
          this.#isLoading.set(false);
        },
      });
  }

  // protected addNote(noteData: NoteDTO) {
  //   console.log('Adding note:', noteData);

  //  this.repo
  //   .create(noteData)
  //   .subscribe((createdNote) => {
  //     const previousNotes = this.notes.value;
  //     const currentNotes = [...previousNotes, createdNote];
  //     this.notes.next(currentNotes);
  //   });
  // }

  addNote(noteData: NoteDTO) {
    console.log('Adding note:', noteData);
    this.repo
      .create(noteData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (createdNote) => {
          const previousNotes = this.#notes();
          const currentNotes = [...previousNotes, createdNote];
          this.#notes.set(currentNotes);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error adding note:', error);
          this.#error.set('Failed to add note. Please try again later.');
        },
      });
  }
  deleteNote(noteId: Note['id']) {
    console.log('Deleting note with id:', noteId);
    this.repo
      .delete(noteId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          const previousNotes = this.#notes();
          const currentNotes = previousNotes.filter((note) => note.id !== noteId);
          this.#notes.set(currentNotes);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error deleting note:', error);
          this.#error.set('Failed to delete note. Please try again later.');
        },
      });
  }

  updateNote(note: Note) {
    console.log('Updating note with id:', note.id);
    this.repo.update(note.id, note).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updatedNote) => {
        const previousNotes = this.#notes();
        const currentNotes = previousNotes.map((n) => (n.id === updatedNote.id ? updatedNote : n));
        this.#notes.set(currentNotes);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error updating note:', error);
        this.#error.set('Failed to update note. Please try again later.');
      },
    });
  }
}

import { Component } from '@angular/core';
import { NoteList } from './components/note-list-rx/note-list';
import { Card } from '../../core/components/card/card';

@Component({
  selector: 'ind-notes-page',
  imports: [NoteList, Card],
  template: `
    <h2>Notes Page</h2>
    <ind-card>
      <ind-note-list></ind-note-list>
    </ind-card>
  `,
  styles: `
    :host {
      display: block;
      padding: 1rem;
      width: 100%;
    }
  `,
})
export default class NotesPage {}

import { TestBed } from '@angular/core/testing';

import { NotesStore } from './notes-store';

describe('NotesStore', () => {
  let service: NotesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RepositoryRx } from '../../../core/types/repository-rx';
import { Note, NoteDTO } from '../types/note';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Service()
export class NotesApiRepo implements RepositoryRx<Note, NoteDTO> {

  private readonly http = inject(HttpClient);

  private API_URL = environment.apiUrl + '/notes'

  // async asyncGetAll(): Promise<Note[]> {
  //   const response = await fetch(this.API_URL);
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch notes');
  //   }
  //   const data = await response.json() as Note[];
  //   return data;
  // }


  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.API_URL);
  }

  getById(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.API_URL}/${id}`);
  }

  // async asyncCreate(data: NoteDTO): Promise<Note> {
  //   const response = await fetch(
  //     this.API_URL,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     });
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch notes');
  //   }
  //   const newNote = await response.json() as Note;
  //   return newNote;
  // }

  create(item: NoteDTO): Observable<Note> {
    return this.http.post<Note>(this.API_URL, item);
  }

  update(id: string, item: Partial<NoteDTO>): Observable<Note> {
    return this.http.patch<Note>(`${this.API_URL}/${id}`, item);
  }

  delete(id: string): Observable<void> {
    return this.http
      .delete(`${this.API_URL}/${id}`)
      .pipe(
        map( () => undefined )
      )
  }

}

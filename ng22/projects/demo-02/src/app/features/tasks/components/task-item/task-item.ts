import { Component, input, output } from '@angular/core';
import { Task } from '../../types/task';
import { Card } from '../../../../core/components/card/card';

@Component({
  selector: 'ind-task-item',
  imports: [Card],
  template: `

   <!-- @let task = task(); -->

    <ind-card [cardTitle]="task().title">
      <p>{{ task().id }}</p>
      <p>{{ task().owner }}</p>
      <label >
        <input type="checkbox" [checked]="task().isCompleted" (change)="emitChange()"/>
        Completed
      </label>
      <button (click)="emitDelete()">Borrar</button>
    </ind-card>
  `,
  styles: `
  label {display: block}
  `,
})
export class TaskItem {
  task = input.required<Task>();

  deleteEvent = output<Task['id']>()
  changeEvent = output<Task['id']>()

  emitDelete() {
    this.deleteEvent.emit(this.task().id);
  }

  emitChange() {
    this.changeEvent.emit(this.task().id);
  }
}

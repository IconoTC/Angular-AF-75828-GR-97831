import { Component, output, signal } from '@angular/core';
import { TaskDTO } from '../../types/task';
import { JsonPipe } from '@angular/common';
import { form, FormField } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-task-form',
  imports: [JsonPipe, FormField, FormsModule],
  template: `
    <p>Signal Form</p>
    <form (ngSubmit)="emitAddTask()">
      <label class="form-control">
        Título:
        <input type="text" [formField]="taskForm.title" />
      </label>
      <label class="form-control">
        Responsable:
        <input type="text" [formField]="taskForm.owner" />
      </label>
      <button type="submit">Agregar tarea</button>
    </form>

    <pre>{{ taskData() | json }}</pre>
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
export class TaskForm {
  protected addEvent = output<TaskDTO>();

  protected readonly taskData = signal<TaskDTO>({
    title: '',
    owner: '',
    isCompleted: false,
  });

  protected readonly taskForm = form(this.taskData);

  protected emitAddTask() {
    // const data: TaskDTO ={ ...ngForm.value, isCompleted: false };
    // this.taskForm.
    console.log('Emitiendo evento para agregar tarea:', this.taskData);
    this.addEvent.emit(this.taskData());
  }
}

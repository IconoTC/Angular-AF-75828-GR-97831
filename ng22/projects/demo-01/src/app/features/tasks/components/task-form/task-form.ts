import { Component, output } from '@angular/core';
import { TaskDTO } from '../../types/task';

@Component({
  selector: 'ind-task-form',
  imports: [],
  template: `
    <p>task-form works!</p>
    <button
      type="button"
      (click)="emitAddTask({ title: 'Nueva tarea', owner: 'Usuario', isCompleted: false })"
    >
      Agregar tarea
    </button>
  `,
  styles: ``,
})
export class TaskForm {


  protected addEvent = output<TaskDTO>()


  protected emitAddTask(taskData: TaskDTO) {
    console.log('Emitiendo evento para agregar tarea:', taskData);
    this.addEvent.emit({ ...taskData });
  }
}

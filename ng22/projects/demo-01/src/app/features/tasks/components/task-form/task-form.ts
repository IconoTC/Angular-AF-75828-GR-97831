import { Component, ElementRef, OnInit, output, viewChild } from '@angular/core';
import { TaskDTO } from '../../types/task';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ind-task-form',
  imports: [FormsModule, JsonPipe],
  template: `
    <form (ngSubmit)="emitAddTask(ngForm)" #form  #ngForm="ngForm">
      <label class="form-control">
        Título:
        <input type="text" name="title" ngModel/>
      </label>
      <label class="form-control">
        Responsable:
        <input type="text" name="owner" ngModel/>
      </label>
      <button
        type="submit"
      >
        Agregar tarea
      </button>
    </form>


    <pre>{{ ngForm.value | json }}</pre>

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
export class TaskForm implements OnInit {
  protected addEvent = output<TaskDTO>();


  protected readonly form = viewChild<ElementRef>('form' );
  protected readonly ngForm = viewChild<NgForm>('ngForm');

  ngOnInit() {
    console.log('Formulario:', this.form());
    console.log('Formulario ngForm:', this.ngForm());
  }


  protected emitAddTask(ngForm: NgForm) {

    const data: TaskDTO ={ ...ngForm.value, isCompleted: false };
    ngForm.resetForm();

    console.log('Emitiendo evento para agregar tarea:', data);
    this.addEvent.emit(data);
  }
}

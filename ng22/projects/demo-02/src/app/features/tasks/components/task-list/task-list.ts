import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Task, TaskDTO } from '../../types/task';
import TASKS from '../../data/tasks-data.json';
import { JsonPipe } from '@angular/common';
import { TaskForm } from '../task-form/task-form';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'ind-task-list',
  imports: [JsonPipe, TaskForm, TaskItem],
  template: `
    <details #details>
      <summary>Add Task</summary>
      <ind-task-form (addEvent)="addTask($event)" />
    </details>

    @if (tasks().length === 0) {
      <p>Cargando tareas....</p>
    } @else {
      <ul>
        @for (task of tasks(); track task.id) {
          <li>
            <ind-task-item
              [task]="task"
              (deleteEvent)="deleteTask($event)"
              (changeEvent)="updateTask($event)"
            />
          </li>
        }
      </ul>
      <!--
        Ayuda para ver las tareas inicialmente
        -->
      <pre>{{ tasks() | json }}</pre>
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
export class TaskList {
  protected readonly tasks = signal<Task[]>([]);
  protected readonly details = viewChild<ElementRef<HTMLDetailsElement>>('details');

  constructor() {
    this.loadTasks();
  }

  private generateId(): string {
    while (true) {
      const id = crypto.randomUUID().substring(1, 6);
      // Verificar que el ID no exista ya
      if (!this.tasks().some((task) => task.id === id)) {
        return id;
      }
    }
  }

  protected loadTasks() {
    // Simulación de carga de tareas desde una API
    setTimeout(() => {
      this.tasks.set(TASKS);
    }, 1000);
  }

  protected addTask(taskData: TaskDTO) {
    console.log('Add new task:', taskData);

    const newTask: Task = {
      id: this.generateId(), // Genera un ID aleatorio
      ...taskData,
    };

    this.tasks.update((tasks) => [...tasks, newTask]);
    (this.details() as ElementRef<HTMLDetailsElement>).nativeElement.open = false; // Cerrar el detalle después de agregar la tarea
  }

  protected deleteTask(taskId: Task['id']) {
    console.log('Delete task with id:', taskId);
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  protected updateTask(taskId: Task['id']) {
    console.log('Update task with id:', taskId);
    this.tasks.update((tasks) => {
      return tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    });
  }
}

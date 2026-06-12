import { Component } from '@angular/core';
import { TaskList } from './components/task-list/task-list';
import { Card } from '../../core/components/card/card';

@Component({
  selector: 'ind-tasks-page',
  imports: [TaskList, Card],
  template: `
    <h2>Tasks Page</h2>
    <ind-card>
      <ind-task-list></ind-task-list>
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
export default class TasksPage {}

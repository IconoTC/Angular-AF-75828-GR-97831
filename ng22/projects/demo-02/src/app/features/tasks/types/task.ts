export interface Task {
  id: string;
  title: string;
  owner: string;
  isCompleted: boolean;
}

export type TaskDTO = Omit<Task, 'id'>;

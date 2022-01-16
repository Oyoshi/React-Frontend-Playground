export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ToDoListState {
  todos: ToDo[];
}

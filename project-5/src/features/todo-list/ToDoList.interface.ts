import { FormEvent } from "react";

export interface ToDo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ToDoListState {
  todos: ToDo[];
}

export type InputEvent = FormEvent<HTMLInputElement>;
export type SubmitEvent = FormEvent<HTMLFormElement>;

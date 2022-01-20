import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { RootState } from "../../app/store";
import { ToDo, ToDoListState } from "./ToDoList.interface";

const initialState: ToDoListState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      const newTodo: ToDo = {
        id: v4(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleComplete: (
      state,
      action: PayloadAction<{ id: string; completed: boolean }>
    ) => {
      const todoIdx = state.todos.findIndex(
        (todo: ToDo) => todo.id === action.payload.id
      );
      state.todos[todoIdx].completed = action.payload.completed;
    },
  },
});

export const { addToDo, toggleComplete } = todoSlice.actions;
export const selectToDos = (state: RootState) => state.todos.todos;
export default todoSlice.reducer;

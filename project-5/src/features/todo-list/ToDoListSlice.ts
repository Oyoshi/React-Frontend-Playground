import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ToDo, ToDoListState } from "./ToDoList.interface";

const initialState: ToDoListState = {
  todos: [
    { id: 1, title: "ToDo 1", completed: false },
    { id: 2, title: "ToDo 2", completed: false },
    { id: 3, title: "ToDo 3", completed: false },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      const newTodo: ToDo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
  },
});

export const { addToDo } = todoSlice.actions;
export const selectToDos = (state: RootState) => state.todos.todos;
export default todoSlice.reducer;

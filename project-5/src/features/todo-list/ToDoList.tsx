import { useState } from "react";
import { isEmpty } from "lodash";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { ToDo, InputEvent, SubmitEvent } from "./ToDoList.interface";
import { selectToDos, addToDo } from "./ToDoListSlice";
import { PrimaryButton, DangerButton, Input } from "components/atoms";
import { Form, ToDoItemList, ToDoItem } from "./ToDoList.styles";

export const ToDoList = () => {
  const [newToDoTitle, setNewToDoTile] = useState<string>();

  const todos = useAppSelector(selectToDos);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: InputEvent) =>
    setNewToDoTile(e.currentTarget.value);
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (newToDoTitle && !isEmpty(newToDoTitle)) {
      dispatch(addToDo(newToDoTitle));
    }
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Add new ToDo..."
          onChange={handleInputChange}
        />
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </Form>
      <ToDoItemList>
        {todos.map((todo: ToDo) => (
          <li key={todo.id}>
            <ToDoItem>
              <h2>{todo.title}</h2>
              <h3>{todo.completed.toString()}</h3>
              <DangerButton>Delete</DangerButton>
            </ToDoItem>
          </li>
        ))}
      </ToDoItemList>
    </section>
  );
};

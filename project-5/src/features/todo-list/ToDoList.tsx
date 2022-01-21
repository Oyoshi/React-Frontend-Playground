import { useState } from "react";
import { isEmpty } from "lodash";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { ToDo, InputEvent, SubmitEvent } from "./ToDoList.interface";
import { selectToDos, addToDo } from "./ToDoListSlice";
import { PrimaryButton, Input } from "components/atoms";
import { Form, ToDoItemList } from "./ToDoList.styles";
import { ToDoItem } from "./components/molecules";

export const ToDoList = () => {
  const [newToDoTitle, setNewToDoTitle] = useState<string>();

  const todos = useAppSelector(selectToDos);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: InputEvent) =>
    setNewToDoTitle(e.currentTarget.value);
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (newToDoTitle && !isEmpty(newToDoTitle)) {
      dispatch(addToDo({ title: newToDoTitle }));
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
            <ToDoItem {...todo} />
          </li>
        ))}
      </ToDoItemList>
    </section>
  );
};

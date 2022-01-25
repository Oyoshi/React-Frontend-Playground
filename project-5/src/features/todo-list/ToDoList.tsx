import { useState } from "react";
import { isEmpty } from "lodash";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { ToDo, InputEvent, SubmitEvent } from "./ToDoList.interface";
import { selectToDos, selectCompletedToDos, addToDo } from "./ToDoListSlice";
import { PrimaryButton, Input } from "components/atoms";
import { Section, Form, ToDoItemList } from "./ToDoList.styles";
import { ToDoItem } from "./components/molecules";

export const ToDoList = () => {
  const [newToDoTitle, setNewToDoTitle] = useState<string>();

  const todos = useAppSelector(selectToDos);
  const completedToDos = useAppSelector(selectCompletedToDos);
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
    <Section>
      <Form onSubmit={handleSubmit}>
        <h1>ToDo App</h1>
        <Input
          type="text"
          placeholder="Add new ToDo..."
          onChange={handleInputChange}
        />
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </Form>
      <h2>Tasks</h2>
      <ToDoItemList>
        {todos.map((todo: ToDo) => (
          <li key={todo.id}>
            <ToDoItem {...todo} />
          </li>
        ))}
      </ToDoItemList>
      <h2>Completed</h2>
      <ToDoItemList>
        {completedToDos.map((todo: ToDo) => (
          <li key={todo.id}>
            <ToDoItem {...todo} />
          </li>
        ))}
      </ToDoItemList>
    </Section>
  );
};

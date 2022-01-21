import { FC } from "react";
import { useAppDispatch } from "app/hooks";
import { ToDo } from "features/todo-list/ToDoList.interface";
import { toggleComplete, deleteToDo } from "features/todo-list/ToDoListSlice";
import {
  ToDoItemCard,
  TitleContainer,
  ActionButtonsContainer,
} from "./ToDoItem.styles";
import { SecondaryButton, DangerButton } from "components/atoms";

export const ToDoItem: FC<ToDo> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  const handleToggleChange = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteToDo({ id: id }));
  };

  return (
    <ToDoItemCard completed={completed}>
      <TitleContainer>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleChange}
        />
        <h2>{title}</h2>
      </TitleContainer>
      <ActionButtonsContainer>
        <SecondaryButton>Edit</SecondaryButton>
        <DangerButton onClick={handleDelete}>Delete</DangerButton>
      </ActionButtonsContainer>
    </ToDoItemCard>
  );
};

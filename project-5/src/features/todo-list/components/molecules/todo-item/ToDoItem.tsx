import { FC, useState } from "react";
import { useAppDispatch } from "app/hooks";
import { ToDo, InputEvent } from "features/todo-list/ToDoList.interface";
import {
  toggleComplete,
  deleteToDo,
  updateToDo,
} from "features/todo-list/ToDoListSlice";
import {
  ToDoItemCard,
  TitleContainer,
  ActionButtonsContainer,
} from "./ToDoItem.styles";
import { SecondaryButton, DangerButton } from "components/atoms";

export const ToDoItem: FC<ToDo> = ({ id, title, completed }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [currentTitle, setCurrentTitle] = useState<string>(title);

  const dispatch = useAppDispatch();

  const handleToggleEdit = () => setEdit(!edit);

  const handleInputChange = (e: InputEvent) =>
    setCurrentTitle(e.currentTarget.value);

  const handleToggleChange = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteToDo({ id: id }));
  };

  const handleUpdate = () => {
    if (currentTitle !== title) {
      dispatch(updateToDo({ id: id, title: currentTitle }));
    }
    handleToggleEdit();
  };

  return (
    <ToDoItemCard completed={completed}>
      <TitleContainer>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleChange}
        />
        {edit ? (
          <input
            type="text"
            onChange={handleInputChange}
            value={currentTitle}
          />
        ) : (
          <h2>{title}</h2>
        )}
      </TitleContainer>
      <ActionButtonsContainer>
        {edit ? (
          <SecondaryButton onClick={handleUpdate}>Save</SecondaryButton>
        ) : (
          <SecondaryButton onClick={handleToggleEdit}>Edit</SecondaryButton>
        )}
        <DangerButton onClick={handleDelete}>Delete</DangerButton>
      </ActionButtonsContainer>
    </ToDoItemCard>
  );
};

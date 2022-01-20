import { FC } from "react";
import { ToDoProps } from "./ToDoItem.interface";
import {
  ToDoItemCard,
  TitleContainer,
  ActionButtonsContainer,
} from "./ToDoItem.styles";
import { SecondaryButton, DangerButton } from "components/atoms";

export const ToDoItem: FC<ToDoProps> = ({ title, completed }) => {
  return (
    <ToDoItemCard>
      <TitleContainer>
        <input type="checkbox" checked={completed} />
        <h2>{title}</h2>
      </TitleContainer>
      <ActionButtonsContainer>
        <SecondaryButton>Edit</SecondaryButton>
        <DangerButton>Delete</DangerButton>
      </ActionButtonsContainer>
    </ToDoItemCard>
  );
};

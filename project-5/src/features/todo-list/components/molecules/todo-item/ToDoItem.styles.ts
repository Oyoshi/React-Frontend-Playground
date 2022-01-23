import styled from "styled-components";

export const ToDoItemCard = styled.div<{ completed: boolean }>`
  background-color: ${(props) =>
    props.completed
      ? props.theme.palette.common.cardCompletedBackground
      : props.theme.palette.common.cardBackground};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: ${(props) => props.theme.effects.transition};
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  margin: 1em 0;
  display: flex;
  min-height: 5em;
`;

export const TitleContainer = styled.div`
  flex-grow: 1;
  > * {
    display: inline-block;
    margin: 1em 2em;
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    display: inline-block;
    margin-right: 2em;
  }
`;

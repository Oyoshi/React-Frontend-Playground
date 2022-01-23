import styled from "styled-components";

export const Form = styled.form`
  background-color: ${(props) => props.theme.palette.secondary.background};
  min-height: 30vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    margin: 0.5em 0;
  }
`;

export const ToDoItemList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1em 2em;
`;

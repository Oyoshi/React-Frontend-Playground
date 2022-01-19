import styled from "styled-components";

export const ToDoItem = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const ToDoItemList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1em 2em;
`;

export const Form = styled.form`
  background: #440381;
  min-height: 30vh;
`;

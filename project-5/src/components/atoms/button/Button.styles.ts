import styled from "styled-components";
import { ButtonProps } from "./Button.interface";

export const ActionButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.btnType === "primary" ? "#02fdd0" : "#ec368d"};
  color: #ffffff;
  padding: 0.5em 1em;
  border-radius: 24px;
  font-size: 1.3em;
  outline-style: none;
  border-style: none;

  :hover {
    background-color: #00d1ac;
  }
`;

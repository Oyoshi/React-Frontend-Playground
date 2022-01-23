import styled from "styled-components";
import { ButtonProps } from "./Button.interface";

export const ActionButton = styled.button<ButtonProps>`
  ${(props) => {
    switch (props.btnType) {
      case "primary":
        return `background-color: ${props.theme.palette.primary.buttonBackground};`;
      case "secondary":
        return `background-color: ${props.theme.palette.secondary.buttonBackground};`;
      case "accent":
        return `background-color: ${props.theme.palette.accent.buttonBackground};`;
    }
  }}
  color: ${(props) => props.theme.palette.common.buttonColor};
  padding: 0.2em 1em;
  border-radius: 24px;
  font-size: 1.2em;
  outline-style: none;
  border-style: none;
  transition: ${(props) => props.theme.effects.transition};

  :hover {
    background-color: #00d1ac;
  }
`;

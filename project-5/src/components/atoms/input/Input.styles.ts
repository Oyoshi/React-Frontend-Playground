import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 0.2em 1em;
  font-size: 1.2em;
  outline-style: none;
  border-style: none;
  border-radius: ${(props) => props.theme.palette.common.borderRadius};
`;

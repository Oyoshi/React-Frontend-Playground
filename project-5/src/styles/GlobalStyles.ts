import { createGlobalStyle } from "styled-components";
import { BackgroundColorPrimary, fontFamily } from "./variables";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${BackgroundColorPrimary};
  }

  * {
    font-family: ${fontFamily};
}
`;

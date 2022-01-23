import { DefaultTheme } from "styled-components";
import {
  BackgroundColorPrimary,
  BackgroundColorSecondary,
  BackgroundColorAccent,
  PrimaryColor,
  SecondaryColor,
  AccentColor,
  ButtonBackgroundColorPrimary,
  ButtonBackgroundColorSecondary,
  ButtonBackgroundColorAccent,
  ButtonColor,
  CardBackground,
  CardCompletedBackground,
} from "./variables";

export const theme: DefaultTheme = {
  palette: {
    common: {
      buttonColor: ButtonColor,
      cardBackground: CardBackground,
      cardCompletedBackground: CardCompletedBackground,
    },
    primary: {
      color: PrimaryColor,
      background: BackgroundColorPrimary,
      buttonBackground: ButtonBackgroundColorPrimary,
    },
    secondary: {
      color: SecondaryColor,
      background: BackgroundColorSecondary,
      buttonBackground: ButtonBackgroundColorSecondary,
    },
    accent: {
      color: AccentColor,
      background: BackgroundColorAccent,
      buttonBackground: ButtonBackgroundColorAccent,
    },
  },
  effects: {
    transition: "0.3s",
  },
};

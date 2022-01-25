import { DefaultTheme } from "styled-components";
import {
  BackgroundColorPrimary,
  BackgroundColorSecondary,
  BackgroundColorAccent,
  PrimaryColor,
  SecondaryColor,
  AccentColor,
  ButtonBackgroundColorPrimary,
  ButtonBackgroundColorHoverPrimary,
  ButtonBackgroundColorSecondary,
  ButtonBackgroundColorHoverSecondary,
  ButtonBackgroundColorAccent,
  ButtonBackgroundColorHoverAccent,
  ButtonColor,
  CardBackground,
  CardCompletedBackground,
} from "./variables";

export const theme: DefaultTheme = {
  palette: {
    common: {
      borderRadius: "24px",
      buttonColor: ButtonColor,
      cardBackground: CardBackground,
      cardCompletedBackground: CardCompletedBackground,
    },
    primary: {
      color: PrimaryColor,
      background: BackgroundColorPrimary,
      buttonBackground: ButtonBackgroundColorPrimary,
      buttonBackgroundHover: ButtonBackgroundColorHoverPrimary,
    },
    secondary: {
      color: SecondaryColor,
      background: BackgroundColorSecondary,
      buttonBackground: ButtonBackgroundColorSecondary,
      buttonBackgroundHover: ButtonBackgroundColorHoverSecondary,
    },
    accent: {
      color: AccentColor,
      background: BackgroundColorAccent,
      buttonBackground: ButtonBackgroundColorAccent,
      buttonBackgroundHover: ButtonBackgroundColorHoverAccent,
    },
  },
  effects: {
    transition: "0.3s",
  },
};

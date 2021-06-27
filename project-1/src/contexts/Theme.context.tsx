import React from "react";

export type ThemePostfix = "light" | "dark";

export interface IThemeContext {
  themePostfix: ThemePostfix;
  switchTheme: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>({
  themePostfix: "light",
  switchTheme: () => null,
});

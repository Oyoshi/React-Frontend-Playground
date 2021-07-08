import { useContext } from "react";
import { IThemeContext, ThemeContext } from "./ThemeContextProvider";

export function useThemeContext(): IThemeContext {
  return useContext(ThemeContext);
}

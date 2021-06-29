import React, { useContext } from "react";
import { ThemeContext, IThemeContext } from "contexts";
import styles from "./Typography.module.scss";

interface IText {
  children: React.ReactNode;
}

export type TextFCType = React.FC<IText>;

export const Text: React.FC<IText> = ({ children }) => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);

  return (
    <p className={`${styles[`typography--${themePostfix}`]}`}>{children}</p>
  );
};

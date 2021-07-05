import React, { useContext } from "react";
import { ThemeContext, IThemeContext } from "contexts";
import styles from "./Typography.module.scss";

interface IText {
  children: React.ReactNode;
  inactive?: boolean;
}

export type TextFCType = React.FC<IText>;

export const Text: TextFCType = ({ children, inactive = false }) => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);

  return (
    <p
      className={`${styles["typography"]} ${
        inactive
          ? styles[`typography--inactive`]
          : styles[`typography--${themePostfix}`]
      }`}
    >
      {children}
    </p>
  );
};

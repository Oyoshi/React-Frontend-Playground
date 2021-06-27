import React, { useContext } from "react";
import { ThemeContext, IThemeContext } from "contexts";
import styles from "./Button.module.scss";

interface IButton {
  title: string;
  target: string;
}

export const Button: React.FC<IButton> = ({ title, target }) => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);

  return (
    <a
      className={`${styles["button"]} ${styles[`button--${themePostfix}`]}`}
      href={target}
    >
      {title}
    </a>
  );
};

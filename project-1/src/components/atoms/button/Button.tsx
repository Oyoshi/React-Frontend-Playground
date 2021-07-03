import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, IThemeContext } from "contexts";
import styles from "./Button.module.scss";

interface IButton {
  title: string;
  target: string;
}

export const Button: React.FC<IButton> = ({ title, target }) => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);

  return (
    <Link
      className={`${styles["button"]} ${styles[`button--${themePostfix}`]}`}
      to={target}
    >
      {title}
    </Link>
  );
};

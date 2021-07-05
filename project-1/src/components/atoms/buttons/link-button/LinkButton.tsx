import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, IThemeContext } from "contexts";
import styles from "./LinkButton.module.scss";

interface IButton {
  title: string;
  target: string;
}

export const LinkButton: React.FC<IButton> = ({ title, target }) => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);

  return (
    <Link
      className={`${styles["link-button"]} ${
        styles[`link-button--${themePostfix}`]
      }`}
      to={target}
    >
      {title}
    </Link>
  );
};

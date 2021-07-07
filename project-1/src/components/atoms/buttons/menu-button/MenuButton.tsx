import React, { useContext } from "react";
import { ThemeContext, IThemeContext } from "contexts";
import styles from "./MenuButton.module.scss";

interface IMenuButton {
  onClickHandler: () => void;
}

export const MenuButton: React.FC<IMenuButton> = ({ onClickHandler }) => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);

  return (
    <button
      onClick={onClickHandler}
      className={`${styles["menu-button"]} ${
        styles[`menu-button--${themePostfix}`]
      }`}
    >
      <span className="material-icons">menu</span>
    </button>
  );
};

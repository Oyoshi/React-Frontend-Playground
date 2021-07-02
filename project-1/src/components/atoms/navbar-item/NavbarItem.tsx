import React, { useContext } from "react";
import { ThemeContext, IThemeContext } from "contexts";
import styles from "./NavbarItem.module.scss";

interface INavbarItem {
  title: string;
  target: string;
}

export type NavbarItemFCType = React.FC<INavbarItem>;

export const NavbarItem: NavbarItemFCType = ({ title, target }) => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);

  return (
    <li className={styles["navbar__item"]}>
      <a
        className={`${styles["navbar__item-link"]} ${
          styles[`navbar__item-link--${themePostfix}`]
        }`}
        href={target}
      >
        {title}
      </a>
    </li>
  );
};

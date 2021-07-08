import React from "react";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "contexts";
import styles from "./NavbarItem.module.scss";

export interface INavbarItem {
  title: string;
  target: string;
}

export type NavbarItemFCType = React.FC<INavbarItem>;

export const NavbarItem: NavbarItemFCType = ({ title, target }) => {
  const { themePostfix } = useThemeContext();

  return (
    <li className={styles["navbar__item"]}>
      <NavLink
        className={`${styles["navbar__item-link"]} ${
          styles[`navbar__item-link--${themePostfix}`]
        }`}
        activeClassName={styles["navbar__item-link--active"]}
        exact
        to={target}
      >
        {title}
      </NavLink>
    </li>
  );
};

import React, { useContext } from "react";
import { ThemeContext, IThemeContext } from "contexts";
import { Logo, NavbarItem, NavbarItemFCType } from "components/atoms";
import styles from "./Navbar.module.scss";

type NavbarType = React.FC & {
  NavbarItem: NavbarItemFCType;
};

const Navbar: NavbarType = ({ children }) => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);

  return (
    <nav className={`${styles["navbar"]} ${styles[`navbar--${themePostfix}`]}`}>
      <Logo />
      <ul className={styles["navbar__list"]}>{children}</ul>
    </nav>
  );
};

Navbar.NavbarItem = NavbarItem;

export default Navbar;

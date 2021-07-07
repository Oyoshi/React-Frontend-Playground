import React, { useState, useContext } from "react";
import { ThemeContext, IThemeContext } from "contexts";
import {
  Logo,
  NavbarItem,
  NavbarItemFCType,
  MenuButton,
} from "components/atoms";
import styles from "./Navbar.module.scss";

type NavbarType = React.FC & {
  NavbarItem: NavbarItemFCType;
};

const Navbar: NavbarType = ({ children }) => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState<boolean>(true);

  const toggleisMobileMenuHidden = () =>
    setIsMobileMenuHidden(!isMobileMenuHidden);

  return (
    <nav className={`${styles["navbar"]} ${styles[`navbar--${themePostfix}`]}`}>
      <div className={styles["navbar__container"]}>
        <div className={styles["navbar__menu-container"]}>
          <Logo />
          <MenuButton onClickHandler={toggleisMobileMenuHidden} />
        </div>
        <ul
          className={`${styles["navbar__list"]} ${
            isMobileMenuHidden ? styles["navbar__list--hidden"] : ""
          }`}
        >
          {children}
        </ul>
      </div>
    </nav>
  );
};

Navbar.NavbarItem = NavbarItem;

export default Navbar;

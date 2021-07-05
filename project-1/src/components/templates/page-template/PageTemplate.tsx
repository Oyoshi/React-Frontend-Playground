import React from "react";
import Navbar from "components/molecules";
import { INavbarItem, ToggleButton } from "components/atoms";
import { NAVBAR_LINKS } from "./PageTemplate.const";
import styles from "./PageTemplate.module.scss";

interface IPageTemplate {
  children: React.ReactNode;
}

export const PageTemplate: React.FC<IPageTemplate> = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar>
          {NAVBAR_LINKS.map((navLink: INavbarItem, idx: number) => (
            <Navbar.NavbarItem key={`NAVLINK_${idx}`} {...navLink} />
          ))}
        </Navbar>
      </header>
      {children}
      <div className={styles["page-template__toggler-wrapper"]}>
        <ToggleButton />
      </div>
    </div>
  );
};

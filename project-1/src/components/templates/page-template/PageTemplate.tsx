import React from "react";
import Navbar from "components/molecules";
import { INavbarItem } from "components/atoms";
import { NAVBAR_LINKS } from "./PageTemplate.const";

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
    </div>
  );
};

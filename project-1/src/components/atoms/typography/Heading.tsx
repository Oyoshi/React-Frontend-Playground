import React, { useContext } from "react";
import { ThemeContext, IThemeContext } from "contexts";
import styles from "./Typography.module.scss";

interface IHeading {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export type HeadingFCType = React.FC<IHeading>;

export const Heading: React.FC<IHeading> = ({ level, children }) => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);

  switch (level) {
    case 1:
      return (
        <h1 className={`${styles[`typography--${themePostfix}`]}`}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={`${styles[`typography--${themePostfix}`]}`}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={`${styles[`typography--${themePostfix}`]}`}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`${styles[`typography--${themePostfix}`]}`}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={`${styles[`typography--${themePostfix}`]}`}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={`${styles[`typography--${themePostfix}`]}`}>
          {children}
        </h6>
      );
    default:
      return null;
  }
};

import React from "react";
import styles from "./Typography.module.scss";

interface IAccent {
  children: React.ReactNode;
}

export type AccentFCType = React.FC<IAccent>;

export const Accent: React.FC<IAccent> = ({ children }) => {
  return <span className={styles["typography__accent"]}>{children}</span>;
};

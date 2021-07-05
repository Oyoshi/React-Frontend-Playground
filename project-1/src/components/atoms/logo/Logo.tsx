import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link to="/">
      <img
        className={styles["logo"]}
        src={process.env.PUBLIC_URL + "/assets/logo.svg"}
        alt="Ubiq logo"
      />
    </Link>
  );
};

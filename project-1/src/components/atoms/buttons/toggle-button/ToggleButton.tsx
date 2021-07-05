import { useState, useContext } from "react";
import { ThemeContext, IThemeContext } from "contexts";
import Typography from "components/atoms";
import styles from "./ToggleButton.module.scss";

export const ToggleButton = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { switchTheme } = useContext<IThemeContext>(ThemeContext);

  const triggerToggle = () => {
    setToggle(!toggle);
    switchTheme();
  };

  return (
    <div
      onClick={triggerToggle}
      role="button"
      aria-pressed="false"
      className={styles["toggle-button"]}
    >
      <div className={styles["toggle-button__container"]}>
        <div
          className={`${styles["toggle-button__state"]} ${styles["toggle-button__state--left"]}`}
        >
          <Typography.Text inactive={toggle}>Day</Typography.Text>
        </div>
        <div className={styles["toggle-button__state"]}>
          <Typography.Text inactive={!toggle}>Night</Typography.Text>
        </div>
      </div>
      <input
        type="checkbox"
        aria-label="Toggle Button"
        className={styles["toggle-button__input"]}
      />
    </div>
  );
};

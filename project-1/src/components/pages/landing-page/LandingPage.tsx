import { useState } from "react";
import { Button } from "components/atoms";
import { ThemeContext, IThemeContext, ThemePostfix } from "contexts";
import styles from "./LandingPage.module.scss";

export const LandingPage = () => {
  const [themePostfix, setThemePostfix] = useState<ThemePostfix>("light");

  const switchTheme = () => {
    if (themePostfix === "light") {
      setThemePostfix("dark");
    } else {
      setThemePostfix("light");
    }
  };

  const themeContextProviderValue: IThemeContext = {
    themePostfix: themePostfix,
    switchTheme: switchTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextProviderValue}>
      <div className={styles["App"]}>
        <header>
          <nav>
            <ul>
              <li>aaaa</li>
              <li>aaaa</li>
              <li>aaaa</li>
              <li>aaaa</li>
            </ul>
          </nav>
          <div className={styles["App-header"]}>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className={styles["App-link"]}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Learn React
            </a>
            <button onClick={() => switchTheme()}>Day / Night</button>
            <div style={{ zIndex: 10 }}>
              <Button title="Contact Us" target="/" />
            </div>
          </div>
        </header>
      </div>
    </ThemeContext.Provider>
  );
};
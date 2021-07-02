import { useState } from "react";
import Typography, { Button } from "components/atoms";
import Navbar from "components/molecules";
import { ThemeContext, IThemeContext, ThemePostfix } from "contexts";
import styles from "./LandingPage.module.scss";

const { Text, Accent } = Typography;

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
          <Navbar>
            <Navbar.NavbarItem title="aaa" target="/" />
            <Navbar.NavbarItem title="bbb" target="/" />
          </Navbar>
          <div
            className={`${styles["App-header"]} ${
              styles[`App-header--${themePostfix}`]
            }`}
          >
            <Typography.Heading level={1}>
              Ala <Accent>ma</Accent> kota
            </Typography.Heading>
            <Text>Ala ma kota</Text>
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

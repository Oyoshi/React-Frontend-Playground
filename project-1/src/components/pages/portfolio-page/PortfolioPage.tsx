import { useContext } from "react";
import Typography, { Button } from "components/atoms";
import { ThemeContext, IThemeContext } from "contexts";
import { PageTemplate } from "components/templates";
import styles from "../common/Page.module.scss";

const { Heading, Text, Accent } = Typography;

export const PortfolioPage = () => {
  const { themePostfix, switchTheme } = useContext<IThemeContext>(ThemeContext);

  return (
    <PageTemplate>
      <section
        className={`${styles["hero-section"]} ${
          styles[`hero-section--${themePostfix}`]
        }`}
      >
        <Heading level={1}>
          Welcome at <Accent>Portfolio</Accent> section
        </Heading>
        <Text>We're still working on it!</Text>
        <button onClick={() => switchTheme()}>Day / Night</button>
        <div style={{ zIndex: 10 }}>
          <Button title="Contact Us" target="/contact" />
        </div>
      </section>
    </PageTemplate>
  );
};

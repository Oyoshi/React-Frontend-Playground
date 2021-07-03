import { useContext } from "react";
import Typography, { Button } from "components/atoms";
import { ThemeContext, IThemeContext } from "contexts";
import { PageTemplate } from "components/templates";
import styles from "../common/Page.module.scss";

const { Text, Accent } = Typography;

export const HomePage = () => {
  const { themePostfix, switchTheme } = useContext<IThemeContext>(ThemeContext);

  return (
    <PageTemplate>
      <section
        className={`${styles["hero-section"]} ${
          styles[`hero-section--${themePostfix}`]
        }`}
      >
        <Typography.Heading level={1}>
          Ala <Accent>ma</Accent> kota
        </Typography.Heading>
        <Text>Ala ma kota</Text>
        <button onClick={() => switchTheme()}>Day / Night</button>
        <div style={{ zIndex: 10 }}>
          <Button title="Contact Us" target="/contact" />
        </div>
      </section>
    </PageTemplate>
  );
};

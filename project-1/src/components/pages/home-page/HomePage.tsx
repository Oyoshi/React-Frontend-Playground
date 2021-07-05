import { useContext } from "react";
import Typography, { LinkButton } from "components/atoms";
import { ThemeContext, IThemeContext } from "contexts";
import { PageTemplate } from "components/templates";
import styles from "../common/Page.module.scss";

const { Text, Accent } = Typography;

export const HomePage = () => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);

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
        <Text>
          Ala <Accent>ma</Accent> kota
        </Text>
        <div style={{ zIndex: 10 }}>
          <LinkButton title="Contact Us" target="/contact" />
        </div>
      </section>
    </PageTemplate>
  );
};

import { useContext } from "react";
import Typography from "components/atoms";
import { ThemeContext, IThemeContext } from "contexts";
import { PageTemplate } from "components/templates";
import styles from "../common/Page.module.scss";

const { Heading, Accent } = Typography;

export const AboutUsPage = () => {
  const { themePostfix } = useContext<IThemeContext>(ThemeContext);

  return (
    <PageTemplate>
      <section
        className={`${styles["hero-section"]} ${
          styles[`hero-section--${themePostfix}`]
        }`}
      >
        <Heading level={1}>
          Welcome at <Accent>About Us</Accent> section
        </Heading>
        <Heading level={4}>We're still working on it!</Heading>
      </section>
    </PageTemplate>
  );
};

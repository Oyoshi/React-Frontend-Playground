import Typography from "components/atoms";
import { useThemeContext } from "contexts";
import { PageTemplate } from "components/templates";
import styles from "../common/Page.module.scss";

const { Heading, Accent } = Typography;

export const PortfolioPage = () => {
  const { themePostfix } = useThemeContext();

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
        <Heading level={4}>We're still working on it!</Heading>
      </section>
    </PageTemplate>
  );
};

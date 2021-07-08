import Typography, { LinkButton } from "components/atoms";
import { useThemeContext } from "contexts";
import { PageTemplate } from "components/templates";
import commonStyles from "../common/Page.module.scss";
import homePageStyles from "./HomePage.module.scss";

const { Heading, Accent } = Typography;

export const HomePage = () => {
  const { themePostfix } = useThemeContext();

  return (
    <PageTemplate>
      <section
        className={`${commonStyles["hero-section"]} ${
          commonStyles[`hero-section--${themePostfix}`]
        }`}
      >
        <Heading level={1}>
          Ubiq - <Accent>UX</Accent>/<Accent>UI</Accent> Digital Agency
        </Heading>
        <Heading level={5}>
          Turning your idea into reality with our highly experienced team.
        </Heading>
        <div className={homePageStyles["home-page__button-wrapper"]}>
          <LinkButton title="Let's Talk" target="/contact" />
        </div>
      </section>
    </PageTemplate>
  );
};

import React from "react";
import { useThemeContext } from "contexts";
import { IError } from "./GenericErrorPage.const";
import { PageTemplate } from "components/templates";
import Typography from "components/atoms";
import styles from "../common/Page.module.scss";

const { Heading, Accent } = Typography;

export const GenericErrorPage: React.FC<IError> = ({
  code,
  title,
  description,
}) => {
  const { themePostfix } = useThemeContext();

  return (
    <PageTemplate>
      <section
        className={`${styles["hero-section"]} ${
          styles[`hero-section--${themePostfix}`]
        }`}
      >
        <Heading level={1}>{code}</Heading>
        <Heading level={3}>
          <Accent>{title}</Accent>
        </Heading>
        <Heading level={5}>{description}</Heading>
      </section>
    </PageTemplate>
  );
};

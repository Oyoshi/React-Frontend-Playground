import React from "react";
import { Heading, HeadingFCType } from "./Heading";
import { Text, TextFCType } from "./Text";
import { Accent, AccentFCType } from "./Accent";

type TypographyType = React.FC & {
  Heading: HeadingFCType;
  Text: TextFCType;
  Accent: AccentFCType;
};

const Typography: TypographyType = ({ children }) => {
  return <>{children}</>;
};

Typography.Heading = Heading;
Typography.Text = Text;
Typography.Accent = Accent;

export default Typography;

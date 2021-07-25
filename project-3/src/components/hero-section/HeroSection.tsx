import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

export const HeroSection: React.FC = () => {
  return (
    <section>
      <Title>Hello World</Title>
      <Text>Hello World description</Text>
    </section>
  );
};

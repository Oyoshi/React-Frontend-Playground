import React from "react";
import { Layout, Divider } from "antd";
import { HeroSection } from "components/hero-section";
import { InputsFormSection } from "components/inputs-form-section";
import { ResultSection } from "components/result-section";
import "./App.scss";

const { Content, Footer } = Layout;

export const App: React.FC = () => {
  return (
    <Layout>
      <Content>
        <HeroSection />
        <InputsFormSection />
        <Divider />
        <ResultSection />
      </Content>
      <Footer>Footer Content</Footer>
    </Layout>
  );
};

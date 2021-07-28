import React from "react";
import { Layout, Divider } from "antd";
import { InputsFormSection } from "components/inputs-form-section";
import { ResultSection } from "components/result-section";

const { Content } = Layout;

export const App: React.FC = () => {
  return (
    <Layout>
      <Content>
        <InputsFormSection />
        <Divider />
        <ResultSection />
      </Content>
    </Layout>
  );
};

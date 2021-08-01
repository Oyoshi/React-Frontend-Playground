import React, { useState } from "react";
import { Layout, Divider } from "antd";
import {
  NullableFormFields,
  InputsFormSection,
  ResultSection,
} from "components";

const { Content } = Layout;

export const App: React.FC = () => {
  const [formFields, setFormFields] = useState<NullableFormFields>(null);

  return (
    <Layout>
      <Content>
        <InputsFormSection callback={setFormFields} />
        <Divider />
        <ResultSection {...formFields} />
      </Content>
    </Layout>
  );
};

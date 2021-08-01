import React, { useState } from "react";
import { Layout, Divider } from "antd";
import {
  NullableFormFields,
  InputsFormSection,
} from "components/inputs-form-section";
import { ResultSection } from "components/result-section";

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

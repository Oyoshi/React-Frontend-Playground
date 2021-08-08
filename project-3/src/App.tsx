import React, { useState } from "react";
import { Layout, Divider } from "antd";
import { InputsFormSection, ResultSection, FormFields } from "components";

const { Content } = Layout;

export const App: React.FC = () => {
  const [formFields, setFormFields] = useState<FormFields>({
    baseCurrency: "",
    quoteCurrency: "",
  });

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

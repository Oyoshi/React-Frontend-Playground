import React from "react";
import {
  Row,
  Col,
  Form,
  Select,
  DatePicker,
  Button,
  Spin,
  Typography,
} from "antd";
import { useAxios } from "hooks";
import { ALL_CURRENCIES_URL } from "common";
import { convertDictIntoArray } from "utils";
import {
  FORM_LAYOUT,
  ERROR_MESSAGE_BASE_CURRENCY_REQUIRED,
  ERROR_MESSAGE_QUOTE_CURRENCY_REQUIRED,
  ERROR_MESSAGE_INVALID_DATE_RANGE,
} from "./InputsFormSection.const";
import {
  InputsormSectionProps,
  CurrenciesDictType,
  CurreniesDictEntryType,
  FormFields,
} from "./InputsFormSection.types";
import {
  requiredField,
  dateRangeValidator,
} from "./InputsFormSection.validators";
import "./InputsFormSection.less";

const { RangePicker } = DatePicker;
const { Title } = Typography;

export const InputsFormSection: React.FC<InputsormSectionProps> = ({
  callback,
}) => {
  const {
    isLoading: currenciesIsLoading,
    data: currencies,
    error: currenciesError,
  } = useAxios<CurrenciesDictType>(ALL_CURRENCIES_URL);

  const generateSelectionOption = (entries: CurreniesDictEntryType[]) => {
    return entries.map(([shortName, fullName]: CurreniesDictEntryType) => (
      <Select.Option value={shortName} key={shortName}>
        {fullName}
      </Select.Option>
    ));
  };

  const mappedCurrencies = generateSelectionOption(
    convertDictIntoArray(currencies)
  );

  const onFinish = (fields: FormFields) => callback(fields);

  return (
    <section className="inputs-form__section">
      {currenciesError ? (
        <Title>Error</Title>
      ) : (
        <Spin spinning={currenciesIsLoading}>
          <Form
            {...FORM_LAYOUT}
            initialValues={{ baseCurrency: "EUR", quoteCurrency: "USD" }}
            labelAlign="right"
            onFinish={onFinish}
          >
            <Row justify="center" align="middle">
              <Col lg={8} sm={24}>
                <Form.Item
                  name="baseCurrency"
                  label="Base Currency"
                  required
                  rules={[requiredField(ERROR_MESSAGE_BASE_CURRENCY_REQUIRED)]}
                >
                  <Select>{mappedCurrencies}</Select>
                </Form.Item>
                <Form.Item
                  name="quoteCurrency"
                  label="Quote Currency"
                  required
                  rules={[requiredField(ERROR_MESSAGE_QUOTE_CURRENCY_REQUIRED)]}
                >
                  <Select>{mappedCurrencies}</Select>
                </Form.Item>
                <Form.Item
                  name="dateRange"
                  label="Date Range (optional)"
                  rules={[dateRangeValidator(ERROR_MESSAGE_INVALID_DATE_RANGE)]}
                >
                  <RangePicker />
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Spin>
      )}
    </section>
  );
};

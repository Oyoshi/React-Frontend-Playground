import React from "react";
import { Row, Col, Form, Select, DatePicker, Button, Spin } from "antd";
import { Moment } from "moment";
import { useAxios } from "hooks";
import { ALL_CURRENCIES_URL } from "common";
import "./InputsFormSection.less";

const { RangePicker } = DatePicker;

export type FormFields = {
  baseCurrency: string;
  quoteCurrency: string;
  dateRange?: [Moment, Moment];
};

export type NullableFormFields = FormFields | null;

type InputsormSectionProps = {
  callback: (fields: FormFields) => void;
};

type CurrenciesDictType = {
  shortName: string;
  FullName: string;
};

type CurreniesDictEntryType = [string, string];

const formLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const InputsFormSection: React.FC<InputsormSectionProps> = ({
  callback,
}) => {
  const {
    isLoading: currenciesIsLoading,
    data: currencies,
    error: currenciesError,
  } = useAxios<CurrenciesDictType>(ALL_CURRENCIES_URL);

  const mapCurrencies = (currenciesData: CurrenciesDictType | null) => {
    return currenciesData
      ? Object.entries(currenciesData).map(
          ([shortName, FullName]: CurreniesDictEntryType) => {
            return (
              <Select.Option value={shortName} key={shortName}>
                {FullName}
              </Select.Option>
            );
          }
        )
      : [];
  };

  const onFinish = (fields: FormFields) => callback(fields);

  return (
    <section className="inputs-form__section">
      {currenciesError ? (
        <h1>Error</h1>
      ) : (
        <Spin spinning={currenciesIsLoading}>
          <Form {...formLayout} labelAlign="right" onFinish={onFinish}>
            <Row justify="center" align="middle">
              <Col lg={8} sm={24}>
                <Form.Item
                  name="baseCurrency"
                  label="Base Currency"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please select a base currency!",
                    },
                  ]}
                >
                  <Select>{mapCurrencies(currencies)}</Select>
                </Form.Item>
                <Form.Item
                  name="quoteCurrency"
                  label="Quote Currency"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please select a quote currency!",
                    },
                  ]}
                >
                  <Select>{mapCurrencies(currencies)}</Select>
                </Form.Item>
                <Form.Item
                  name="dateRange"
                  label="Date Range (optional)"
                  rules={[
                    {
                      validator(_: any, value: Moment[]) {
                        return value === undefined ||
                          (value.length === 2 && value[0] <= value[1])
                          ? Promise.resolve()
                          : Promise.reject(
                              "Please choose a proper begin and end dates!"
                            );
                      },
                    },
                  ]}
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

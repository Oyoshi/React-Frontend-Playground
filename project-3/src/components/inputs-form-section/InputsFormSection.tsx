import React from "react";
import { Row, Col, Form, Select, DatePicker, Button } from "antd";
import { Moment } from "moment";
import "./InputsFormSection.less";

const { RangePicker } = DatePicker;

export type FormFields = {
  baseCurrency: string;
  quoteCurrency: string;
  dateRange?: Moment[];
};

export type NullableFormFields = FormFields | null;

type InputsormSectionProps = {
  callback: (fields: FormFields) => void;
};

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
  const onFinish = (fields: FormFields) => callback(fields);

  return (
    <section className="inputs-form__section">
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
              <Select>
                <Select.Option value={"xxx"}>xxx</Select.Option>
                <Select.Option value={"yyy"}>yyy</Select.Option>
                <Select.Option value={"zzz"}>zzz</Select.Option>
              </Select>
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
              <Select>
                <Select.Option value={"xxx"}>aaa</Select.Option>
                <Select.Option value={"bbb"}>bbb</Select.Option>
                <Select.Option value={"ccc"}>ccc</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="dateRange"
              label="Date Range (optional)"
              rules={[
                {
                  validator(_: any, value: Moment[]) {
                    return value.length === 2 && value[0] <= value[1]
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
    </section>
  );
};

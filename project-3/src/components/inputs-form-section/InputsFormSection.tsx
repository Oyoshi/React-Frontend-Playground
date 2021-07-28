import React from "react";
import { Row, Col, Form, Select, DatePicker } from "antd";
import "./InputsFormSection.less";

const { RangePicker } = DatePicker;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const InputsFormSection: React.FC = () => {
  return (
    <section className="inputs-form__section">
      <Form {...layout} labelAlign="right">
        <Row justify="center" align="middle">
          <Col lg={8} sm={24}>
            <Form.Item label="Base currency">
              <Select>
                <Select.Option value={"xxx"}>xxx</Select.Option>
                <Select.Option value={"yyy"}>yyy</Select.Option>
                <Select.Option value={"zzz"}>zzz</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Quote currency">
              <Select>
                <Select.Option value={"xxx"}>aaa</Select.Option>
                <Select.Option value={"bbb"}>bbb</Select.Option>
                <Select.Option value={"ccc"}>ccc</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Date range (optional)">
              <RangePicker />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

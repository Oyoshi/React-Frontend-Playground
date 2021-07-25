import React from "react";
import { Row, Col, Form, Input, Select, DatePicker, Button } from "antd";

const { RangePicker } = DatePicker;

export const InputsFormSection: React.FC = () => {
  return (
    <section className="site-layout-content">
      <Row justify="center" align="middle">
        <Col sm={24} md={8}>
          <Form>
            <Form.Item label="Base currency" style={{ marginBottom: 0 }}>
              <Form.Item
                name="year"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: `calc(50% - 8px)`,
                }}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                name="month"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Select />
              </Form.Item>
            </Form.Item>
            <Form.Item label="Quote currency" style={{ marginBottom: 0 }}>
              <Form.Item
                name="year"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                }}
              >
                <Input placeholder="Input birth year" />
              </Form.Item>
              <Form.Item
                name="month"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Select />
              </Form.Item>
            </Form.Item>
            <Form.Item
              label="Date range (optional)"
              style={{ marginBottom: 0 }}
            >
              <RangePicker />
            </Form.Item>
            <Button type="primary">Calculate</Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

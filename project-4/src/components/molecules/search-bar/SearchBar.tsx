import { FC } from "react";
import styled from "styled-components";
import { Input, Col, Row } from "antd";

const Container = styled.div`
  padding: 16px 0;
`;

export const SearchBar: FC = () => (
  <Container>
    <Input.Group>
      <Row gutter={8}>
        <Col span={5}>
          <Input defaultValue="0571" />
        </Col>
        <Col span={8}>
          <Input defaultValue="26888888" />
        </Col>
      </Row>
    </Input.Group>
  </Container>
);

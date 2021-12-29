import { FC } from "react";
import styled from "styled-components";
import { Button } from "antd";

const Container = styled.div`
  background: palevioletred;
  color: white;
`;

export const App: FC = () => (
  <Container>
    <Button type="primary">Button</Button>
  </Container>
);

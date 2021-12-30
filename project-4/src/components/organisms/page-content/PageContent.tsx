import { FC } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { SearchBar, PostsList } from "components/molecules";

const { Content } = Layout;

const Container = styled(Content)`
  padding: 0 50px;
`;

export const PageContent: FC = () => (
  <Container>
    <SearchBar />
    <PostsList />
  </Container>
);

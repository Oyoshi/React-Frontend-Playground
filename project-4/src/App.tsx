import { FC } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { PageContent } from "components/organisms";
import { Footer } from "components/molecules";

const { Header } = Layout;

const PageLayout = styled(Layout)`
  min-height: 100vh;
`;

export const App: FC = () => (
  <PageLayout>
    <Header />
    <PageContent />
    <Footer />
  </PageLayout>
);

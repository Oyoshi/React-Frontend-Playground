import { FC } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { FOOTER_TEXT } from "./Footer.const";

interface PlainFooterProps {
  className?: string;
}

const PlainFooter: FC<PlainFooterProps> = ({ className }) => (
  <Layout.Footer className={className}>{FOOTER_TEXT}</Layout.Footer>
);

export const Footer = styled(PlainFooter)`
  text-align: center;
`;

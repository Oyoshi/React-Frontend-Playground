import React from "react";
import { Typography } from "antd";
import "./ErrorBoundary.less";

const { Title } = Typography;

export class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error__wrapper">
          <Title>Something went wrong.</Title>
        </div>
      );
    }

    return this.props.children;
  }
}

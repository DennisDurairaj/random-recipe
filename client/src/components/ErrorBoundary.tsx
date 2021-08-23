import React, { Component, ErrorInfo } from "react";

interface Props {}
interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Oops! Something went wrong. Please wait a few minutes and try again.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

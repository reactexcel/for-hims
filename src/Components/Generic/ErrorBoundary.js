import React, { Component } from "react";
import "./ErrorBoundary.css";

/**
 * Component to catch any error in whole app and showing fallback UI
 */
export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    info: "",
    error: ""
  };
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ info, error });
  }
  render() {
    return this.state.hasError ? (
      <div className="error-boundary-container">
        {" "}
        <div className="error-boundary-text">
          Something Went Wrong!
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error.toString()}
            <br />
            {this.state.info.componentStack}
          </details>
        </div>{" "}
      </div>
    ) : (
      this.props.children
    );
  }
}

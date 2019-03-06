import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/**ScrollToTop component will scroll the window up on every navigation */
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      window.scroll(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);

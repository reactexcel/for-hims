import React, { Component } from "react";
import { debounce } from "../utils/helper";

export default WrappedComponent => {
  class isTablet extends Component {
    constructor(props) {
      super(props);
      this.state = {
        width: window.innerWidth
      };
      this.debouncedHandleResize = debounce(this.handleResize, 1500);
    }
    componentDidMount() {
      window.addEventListener("resize", this.debouncedHandleResize);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.debouncedHandleResize);
    }
    handleResize = () => this.setState({ width: window.innerWidth });
    render() {
      const { width } = this.state;
      const isTablet = width <= 768;
      return <WrappedComponent {...this.props} isTablet={isTablet} />;
    }
  }
  return isTablet;
};

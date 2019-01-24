import React, { Component } from "react";
import { debounce } from "../utils/helper";

export default WrappedComponent => {
  class isMobile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        width: window.innerWidth
      };
    }
    componentDidMount() {
      window.addEventListener("resize", debounce(this.handleResize,1500));
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
    handleResize = () => this.setState({ width: window.innerWidth });
    render() {
      const { width } = this.state;
      const isMobile = width <= 500;
      return <WrappedComponent {...this.props} isMobile={isMobile} />;
    }
  }
  return isMobile;
};

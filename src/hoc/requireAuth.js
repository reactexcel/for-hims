import React, { Component } from "react";
import { connect } from "react-redux";

export default WrappedComponent => {
  class Authentication extends Component {
    componentDidMount() {
      this.checkAuthentication();
    }
    componentDidUpdate() {
      this.checkAuthentication();
    }
    checkAuthentication = () => {
      const auth = JSON.parse(localStorage.getItem("auth"));
      if (!this.props.login.auth && !auth) {
        this.props.history.push("/");
      }
    };
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  const mapStateToProps = ({ login }) => ({ login });

  return connect(mapStateToProps)(Authentication);
};

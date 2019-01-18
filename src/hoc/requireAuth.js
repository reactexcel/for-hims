import React, { Component } from "react";
import { connect } from "react-redux";
import { firebase } from "../Firebase";
import { loginSuccess } from "../actions";

export default WrappedComponent => {
  class Authentication extends Component {
    state = { authUser: null };
    componentDidMount() {
      this.checkAuthentication();
    }
    componentDidUpdate() {
      this.checkAuthentication();
    }
    checkAuthentication = () => {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!this.props.login.auth && !authUser) {
          this.props.history.push("/");
        } else {
          if (!this.props.login.auth) {
            this.props.loginSuccess();
          }
        }
      });
    };
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  const mapStateToProps = ({ login }) => ({ login });

  return connect(
    mapStateToProps,
    { loginSuccess }
  )(Authentication);
};

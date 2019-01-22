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
        if (!this.props.user.auth && !authUser) {
          this.props.history.push("/");
        } else {
          if (!this.props.user.auth) {
            const data = {
              displayName: authUser.displayName,
              email: authUser.email,
              phoneNumber: authUser.phoneNumber,
              uid: authUser.uid
            };
            this.props.loginSuccess(data);
          }
        }
      });
    };
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  const mapStateToProps = ({ user }) => ({ user });

  return connect(
    mapStateToProps,
    { loginSuccess }
  )(Authentication);
};

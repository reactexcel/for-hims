import React, { Component } from "react";
import { connect } from "react-redux";
import { firebase } from "../Firebase";
import {
  loginSuccess,
  getProfileInfoRequest,
  fetchQuestionsRequest
} from "../actions";

/**Higher Order Component for checking if a User is authenticated or not
 * and calling different if API on the basis of that*/
export default WrappedComponent => {
  class Authentication extends Component {
    state = { authUser: null };
    componentDidMount() {
      this.checkAuthentication();
      // to fetch questions
      if (!this.props.questions.data.length) {
        this.props.fetchQuestionsRequest();
      }
    }
    componentDidUpdate() {
      this.checkAuthentication();
    }
    checkAuthentication = () => {
      this.listener = firebase.auth.onAuthStateChanged(authUser => {
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
          // getting user detail if user is authenticated
          // and stoping unneccessary api calls
          if (
            !this.props.userProfile.isLoading &&
            this.props.userProfile.data.email === undefined
          ) {
            this.props.getProfileInfoRequest({ uid: this.props.user.data.uid });
          }
        }
      });
    };
    componentWillUnmount() {
      this.listener();
    }
    render() {
      const { uid } = this.props.user.data;
      return <WrappedComponent {...this.props} uid={uid} />;
    }
  }
  const mapStateToProps = ({ user, profile: { userProfile }, questions }) => ({
    user,
    userProfile,
    questions
  });

  return connect(
    mapStateToProps,
    { loginSuccess, getProfileInfoRequest, fetchQuestionsRequest }
  )(Authentication);
};

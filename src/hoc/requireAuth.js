import React, { Component } from "react";
import { connect } from "react-redux";
import { firebase } from "../Firebase";
import {
  loginSuccess,
  getProfileInfoRequest,
  getAllCardsRequest
} from "../actions";

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
          // getting user detail if user is authenticated
          // and stoping unneccessary api calls
          if (
            this.props.userProfile.data.firstName === undefined &&
            this.props.userProfile.data.dateOfBirth === undefined &&
            this.props.userProfile.data.shippingAddress === undefined
          ) {
            this.props.getProfileInfoRequest({ uid: this.props.user.data.uid });
          }
          //getting all cards if user is authenticated
          if (this.props.payment.data.fetchCards === undefined) {
            this.props.getAllCardsRequest({ uid: this.props.user.data.uid });
          }
        }
      });
    };
    render() {
      const { uid } = this.props.user.data;
      return <WrappedComponent {...this.props} uid={uid} />;
    }
  }
  const mapStateToProps = ({ user, profile: { userProfile }, payment }) => ({
    user,
    userProfile,
    payment
  });

  return connect(
    mapStateToProps,
    { loginSuccess, getProfileInfoRequest, getAllCardsRequest }
  )(Authentication);
};

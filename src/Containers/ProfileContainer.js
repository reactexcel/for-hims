import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import ProfileInfo from "../Components/Profile/ProfileInfo";
import Prescriptions from "../Components/Profile/Prescriptions";
import ResetPassword from "../Components/Profile/ResetPassword";
import ProfileShippingAddress from "../Components/Profile/ProfileShippingAddress";
import ProfilePayment from "../Components/Profile/ProfilePayment";

class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="profile_section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <ProfileInfo />
                <Prescriptions />
                <ResetPassword />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6">
                <ProfileShippingAddress />
                <ProfilePayment />
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <Footer />
      </div>
    );
  }
}

export default ProfileContainer;

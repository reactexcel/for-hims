import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import ProfileInfo from "../Components/Profile/ProfileInfo";
import Prescriptions from "../Components/Profile/Prescriptions";
import ResetPassword from "../Components/Profile/ResetPassword";
import ProfileShippingAddress from "../Components/Profile/ProfileShippingAddress";
import PaymentContainer from "../Components/Profile/PaymentContainer";
import { connect } from "react-redux";
import { resetPasswordRequest, updateProfileRequest } from "../actions";

class ProfileContainer extends Component {
  onResetPassword = data => {
    this.props.resetPasswordRequest({ ...data });
  };
  onUpdateProfileRequest = data => {
    this.props.updateProfileRequest({ ...data });
  };

  render() {
    const {
      user: { data },
      profile: { resetpsw, userProfile }
    } = this.props;
    return (
      <div>
        <Header />
        <div className="profile_section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <ProfileInfo
                  userInfo={data}
                  userProfile={userProfile}
                  onUpdateProfileRequest={this.onUpdateProfileRequest}
                />
                <Prescriptions />
                <ResetPassword
                  onResetPassword={this.onResetPassword}
                  resetPassword={resetpsw}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6">
                <ProfileShippingAddress />
                <PaymentContainer />
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

const mapStateToProps = ({ user, profile }) => ({ user, profile });

export default connect(
  mapStateToProps,
  { resetPasswordRequest, updateProfileRequest }
)(ProfileContainer);

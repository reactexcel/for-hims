import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import ProfileInfo from "../Components/Profile/ProfileInfo";
import Prescriptions from "../Components/Profile/Prescriptions";
import ResetPassword from "../Components/Profile/ResetPassword";
import ProfileShippingAddress from "../Components/Profile/ProfileShippingAddress";
import PaymentContainer from "../Components/Profile/PaymentContainer";
import { connect } from "react-redux";
import {
  resetPasswordRequest,
  updateProfileRequest,
  addShippingAddressRequest,
  addNewPaymentRequest,
  getAllCardsRequest
} from "../actions";
import * as ROLES from "../constants/roles";

/**Parent Container for showing different section of Profile */
class ProfileContainer extends Component {
  onResetPassword = data => {
    this.props.resetPasswordRequest({ ...data });
  };
  onUpdateProfileRequest = data => {
    this.props.updateProfileRequest({ ...data });
  };

  onUpdateShippingAddress = data => {
    const { uid } = this.props.user.data;
    this.props.addShippingAddressRequest({ ...data, uid });
  };

  onAddNewPayment = data => {
    
    const { uid, email } = this.props.user.data;
    this.props.addNewPaymentRequest({ uid, email, ...data });
  };

  componentDidMount() {
    const { uid } = this.props;
    const {
      userProfile: {
        data: { customerId }
      }
    } = this.props.profile;
    if (!this.props.card.isSuccess && uid && customerId) {
      this.props.getAllCardsRequest({ uid });
    }
  }

  componentDidUpdate(prevProps) {
    const { uid } = this.props;

    if (
      this.props.userProfile.data.customerId &&
      prevProps.userProfile.data.customerId !==
        this.props.userProfile.data.customerId
    ) {
      this.props.getAllCardsRequest({ uid });
    }
  }

  render() {
    const {
      user: { data },
      profile: { resetpsw, userProfile, additionalInfo },
      card
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
                <ProfileShippingAddress
                  userProfile={userProfile}
                  additionalInfo={additionalInfo}
                  onUpdateShippingAddress={this.onUpdateShippingAddress}
                />
                {userProfile.data.role === ROLES.CUSTOMER && (
                  <PaymentContainer
                    userProfile={userProfile}
                    onAddNewPayment={this.onAddNewPayment}
                    card={card}
                  />
                )}
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

const mapStateToProps = ({ user, profile, payment: { card } }) => ({
  user,
  profile,
  card
});

export default connect(
  mapStateToProps,
  {
    resetPasswordRequest,
    updateProfileRequest,
    addShippingAddressRequest,
    addNewPaymentRequest,
    getAllCardsRequest
  }
)(ProfileContainer);

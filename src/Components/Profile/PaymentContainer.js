import React, { Component } from "react";
import StripeContainer from "../Generic/StripeContainer";
import ProfilePayment from "./ProfilePayment";
export default class PaymentContainer extends Component {
  render() {
    return (
      <StripeContainer>
        <ProfilePayment {...this.props} />
      </StripeContainer>
    );
  }
}

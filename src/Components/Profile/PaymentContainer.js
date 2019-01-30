import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import ProfilePayment from "./ProfilePayment";
export default class PaymentContainer extends Component {
  render() {
    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
        <Elements>
          <ProfilePayment userInfo={this.props.userInfo} />
        </Elements>
      </StripeProvider>
    );
  }
}

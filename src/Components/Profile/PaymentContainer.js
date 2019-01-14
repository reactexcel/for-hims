import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import ProfilePayment from "./ProfilePayment";
export default class PaymentContainer extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <Elements>
            <ProfilePayment />
        </Elements>
      </StripeProvider>
    );
  }
}

import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
export default class StripeContainer extends Component {
  render() {
    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
        <Elements>{this.props.children}</Elements>
      </StripeProvider>
    );
  }
}

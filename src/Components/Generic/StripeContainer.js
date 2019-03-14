import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import PropTypes from "prop-types";

/**Generic StripeContainer to enclose children in Stripe Provider and Elements  */
export default class StripeContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  render() {
    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
        <Elements>{this.props.children}</Elements>
      </StripeProvider>
    );
  }
}

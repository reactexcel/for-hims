import React, { Component } from "react";
import StripeContainer from "../Generic/StripeContainer";
import Payment from "./Payment";
export default class CartPaymentContainer extends Component {
  render() {
    return (
      <StripeContainer>
        <Payment {...this.props} />
      </StripeContainer>
    );
  }
}

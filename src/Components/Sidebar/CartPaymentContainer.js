import React, { Component } from "react";
import StripeContainer from "../Generic/StripeContainer";
import Payment from "./Payment";
/**Enclose Cart Payment UI with Stripe Container  */
export default class CartPaymentContainer extends Component {
  render() {
    return (
      <StripeContainer>
        <Payment {...this.props} />
      </StripeContainer>
    );
  }
}

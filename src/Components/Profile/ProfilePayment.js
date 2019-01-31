import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardElement, injectStripe } from "react-stripe-elements";
import ErrorText from "../Generic/ErrorText";
// var stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
import axios from "axios";

class ProfilePayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      loading: false
    };
  }
  submit = async e => {
    this.setState({ loading: true });
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    if (token) {
      this.props.onAddNewPayment({
        token,
        charge: {
          amount: 30,
          currency: "USD"
        }
      });
      this.setState({ loading: false });
      this.stripeRef.clear();
    }
    this.setState({ loading: false });
  };
  validateCard = e => {
    const errors = {};
    if (e.elementType === "card" && e.error !== undefined) {
      errors.message = e.error.message;
      this.setState({ errors });
    } else if (e.error === undefined) {
      this.setState({ errors: {} });
    }
  };
  render() {
    const { errors, loading } = this.state;
    const { data, isError, isLoading, isSuccess, message } = this.props.payment;
    return (
      <div className="profile_module">
        <h3>Payment Methods</h3>
        <form className="payment_form">
          {/* <input
          type="text"
          className="card"
          name="firstName"
          value=""
          autoComplete="true"
          placeholder="Card number"
        />
        <input
          type="text"
          className="cvc"
          value=""
          autoComplete="true"
          placeholder="MM / YY / CVC"
         /> */}
          <CardElement
            onChange={this.validateCard}
            onReady={element => (this.stripeRef = element)}
          />
          {errors.message && <ErrorText text={errors.message} />}
          {isError && message && <div className="server_error">{message}</div>}
          <button
            type="button"
            onClick={this.submit}
            disabled={loading || isLoading}
          >
            Add New Payment Method
          </button>
        </form>
        <Link to="#">Cancel</Link>
      </div>
    );
  }
}

export default injectStripe(ProfilePayment);

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
      loading:false
    };
  }
  submit = async e => {
    this.setState({loading:true})
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    const { uid, email } = this.props.userInfo;
    if (token) {
      try {
        this.setState({loading:false})
        this.props.onAddNewPayment({
          token,
          userId: uid,
          email,
          charge: {
            amount: 30,
            currency: "USD"
          }
        });
        this.stripeRef.clear();
      } catch (e) {
        this.setState({loading:false})
        console.log(e, "ytfgyhuj");
      }
    }
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
          <button type="button" onClick={this.submit} disabled={loading || isLoading}>
            Add New Payment Method
          </button>
        </form>
        {isError && message && <div className="server_error">{message}</div>}
        <Link to="#">Cancel</Link>
      </div>
    );
  }
}

export default injectStripe(ProfilePayment);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardElement, injectStripe } from "react-stripe-elements";
import ErrorText from "../Generic/ErrorText";
// var stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

class ProfilePayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }
  submit = async e => {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    console.log(token);
    if (token) {
      this.stripeRef.clear();
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
    const { errors } = this.state;
    return (
      <div className="profile_module">
        <h3>Payment Methods</h3>
        <form>
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
          <button type="button" onClick={this.submit}>
            Add New Payment Method
          </button>
        </form>
        <Link to="#">Cancel</Link>
      </div>
    );
  }
}

export default injectStripe(ProfilePayment);

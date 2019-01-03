import React, { Component } from "react";

class Shipping extends Component {
  static defaultProps = {
    renderNext: () => {}
  };
  componentDidmount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div id="mySidenav5">
        <div className="symbols">
          <div className="symbols-title">Shipping</div>
          <ul>
            <li className="symbols1"> </li>
            <li className="symbols2"> </li>
            <li className="symbols3 active"> </li>
            <li className="symbols4"> </li>
            <li className="symbols5"> </li>
          </ul>
        </div>
        <div className="login_form">
          <div className="register_box">
            <h3>Shipping Information</h3>
            <h5>Please enter your home shipping address</h5>
            <form>
              <input
                type="text"
                name="firstName"
                value=""
                autoComplete="true"
                placeholder="First Name"
                onChange={() => {}}
              />
              <input
                type="text"
                name="lastName"
                value=""
                autoComplete="true"
                placeholder="Last Name"
                onChange={() => {}}
              />
              <input
                type="text"
                name="line1"
                value=""
                autoComplete="true"
                placeholder="Street Address"
                onChange={() => {}}
              />
              <input
                type="text"
                name="line2"
                value=""
                autoComplete="true"
                placeholder="Apt/Suite"
                onChange={() => {}}
              />
              <input
                type="text"
                name="city"
                value=""
                autoComplete="true"
                placeholder="City"
                onChange={() => {}}
              />
              <input
                type="text"
                name="state"
                value=""
                autoComplete="true"
                placeholder="State"
                onChange={() => {}}
              />
              <input
                type="text"
                name="zip"
                value=""
                autoComplete="true"
                placeholder="Zip"
                onChange={() => {}}
              />
              <input
                type="text"
                name="united"
                value=""
                autoComplete="true"
                placeholder="United States"
                onChange={() => {}}
              />
              <input
                type="number"
                name="phone"
                value=""
                autoComplete="true"
                placeholder="Phone"
                onChange={() => {}}
              />
              <div className="switch_title">
                <h4> Send me SMS Delivery Updates </h4>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slid round" />
                </label>
              </div>
            </form>
          </div>
        </div>
        <button
          tabIndex="0"
          type="button"
          className="login_btn"
          onClick={this.props.renderNext}
        >
          Save Shipping Address
        </button>
      </div>
    );
  }
}

export default Shipping;

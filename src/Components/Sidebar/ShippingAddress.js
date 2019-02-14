import React, { Component } from "react";

class ShippingAddress extends Component {
  render() {
    const { shippingAddress } = this.props;
    console.log(shippingAddress);
    return (
      <div className="cart_section">
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
        <div className="shipping_address_box">
          <h3> Home Shipping address </h3>
          <h4 className="grew">
            {" "}
            This is the shippping address we will send to.
          </h4>
          {shippingAddress &&
            shippingAddress.map((address, index) => (
              <blockquote key={index}>
                {" "}
                {address.street}, {address.city} <br /> {address.states} <br />
                {address.zipcode} <br /> USA
              </blockquote>
            ))}
          <a href="#" className="read">
            {" "}
            Create New Address{" "}
          </a>
        </div>
        <button tabIndex="0" type="button" className="login_btn">
          {" "}
          Save Shipping Address{" "}
        </button>
      </div>
    );
  }
}

export default ShippingAddress;

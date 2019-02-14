import React, { Component } from "react";
import Shipping from "./Shipping";

class ShippingAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addShipping: false
    };
  }
  toggleAddAddress = () =>
    this.setState(prevState => ({ addShipping: !prevState.addShipping }));
  render() {
    const { shippingAddress, addressIndex } = this.props;
    const { addShipping } = this.state;
    return (
      <>
        {addShipping ? (
          <Shipping
            toggleAddAddress={this.toggleAddAddress}
            addNew
            shippingAddress={shippingAddress}
          />
        ) : (
          <>
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
                    <blockquote
                      key={index}
                      onClick={() => this.props.selectAddress(index)}
                      className={index === addressIndex ? "active-address" : ""}
                    >
                      {" "}
                      {address.street}, {address.city} <br /> {address.states}{" "}
                      <br />
                      {address.zipcode} <br /> USA
                    </blockquote>
                  ))}
                <button
                  className="underline_button"
                  onClick={this.toggleAddAddress}
                >
                  {" "}
                  Create New Address{" "}
                </button>
              </div>
            </div>
            <button
              tabIndex="0"
              type="button"
              className="login_btn"
              onClick={this.props.saveAddress}
            >
              {" "}
              Save Shipping Address{" "}
            </button>
          </>
        )}
      </>
    );
  }
}

export default ShippingAddress;

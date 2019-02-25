import React, { Component } from "react";
import pro_img1 from "../../assets/images/pro_img1.png";
import { withRouter } from "react-router-dom";
import CartPaymentContainer from "./CartPaymentContainer";
import ShippingAddress from "./ShippingAddress";
class ConfirmOrder extends Component {
  state = {
    showPayment: false,
    showAddress: false,
    index: 0
  };
  static defaultProps = {
    renderNext: () => {}
  };

  open = state => this.setState({ [state]: true });
  close = state => this.setState({ [state]: false });

  onChargeCustomer = () => {
    const {
      userProfile: {
        data: { shippingAddress }
      }
    } = this.props;
    const { index } = this.state;
    const address = {
      line1: shippingAddress[index].street,
      city: shippingAddress[index].city,
      state: shippingAddress[index].states,
      postal_code: shippingAddress[index].zipcode,
      country: "US"
    };
    this.props.onChargeCustomer(address)
  };
  componentDidUpdate(prevProps) {
    if (
      this.props.payment.charge.isSuccess &&
      prevProps.payment.charge.isSuccess !== this.props.payment.charge.isSuccess
    ) {
      if (!this.props.userProfile.data.hasOwnProperty("appointmentStatus")) {
        this.props.onUpdateAppointment({ status: "Waiting" });
        this.props.history.push("/gender");
      } else {
        this.props.removeFromCart();
        // this.props.closeSidebar();
        this.props.history.push("/orders");
      }
    }
  }

  selectAddress = index => this.setState({ index });
  render() {
    const {
      userProfile: {
        data: { shippingAddress }
      },
      payment
    } = this.props;
    const { data } = payment.card;
    const { isLoading: chargeLoading } = payment.charge;
    const { showPayment, showAddress, index } = this.state;
    return (
      <>
        {showPayment ? (
          <CartPaymentContainer
            payment={payment}
            closePayment={() => this.close("showPayment")}
            onAddNewPayment={this.props.onAddNewPayment}
          />
        ) : showAddress ? (
          <ShippingAddress
            shippingAddress={shippingAddress}
            selectAddress={this.selectAddress}
            addressIndex={index}
            saveAddress={() => this.close("showAddress")}
          />
        ) : (
          <>
            {chargeLoading ? (
              <div className="login-loader">
                <div>Waiting for transaction to complete...</div>
                <div>Hang tight</div>
                <div className="loader" />
              </div>
            ) : (
              <>
                <div className="cart_section no-items">
                  <div className="symbols">
                    <div className="symbols-title">Confirm Order</div>
                    <ul>
                      <li className="symbols1"> </li>
                      <li className="symbols2"> </li>
                      <li className="symbols3"> </li>
                      <li className="symbols4 "> </li>
                      <li className="symbols5 active"> </li>
                    </ul>
                  </div>
                  <div className="cart_items ">
                    <div className="cart-details_product">
                      <div className="cart-details_product-image">
                        <img src={pro_img1} alt="" />
                      </div>
                      <div className="cart-details_product-details">
                        <h4> Sildenafil </h4>
                        <h4 className="description">
                          10 x 20 mg pills or as prescribed by the doctor.
                          Billed monthly
                        </h4>
                        <h4> $30.00 </h4>
                        <div className="renewal-icon">
                          <span className="glyphicon glyphicon-refresh" />
                        </div>
                        <div className="icon_close">
                          <span className="glyphicon glyphicon-remove" />
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="cart_numbers">
                      <ul>
                        <li>
                          Order Sub-total * <span> $20.00 </span>
                        </li>
                        <li>
                          Membership <span> $10.00 </span>
                        </li>
                        <li>
                          Medical Fee <span> $5.00 </span>
                        </li>
                        <li>
                          Promo Discount <span> -$5.00 </span>
                        </li>
                        <li className="total">
                          Grand Total <span> $30.00 </span>
                        </li>
                        <li className="promo_code_btn">
                          You save $5.00 with this promo code!
                        </li>

                        <li className="includes">
                          {" "}
                          * Includes pharmacy & drug fees{" "}
                        </li>
                        <li className="shipping-add">
                          Shipping Address
                          <i
                            className="fa fa-pencil"
                            onClick={() => this.open("showAddress")}
                          />
                        </li>
                        <li>
                          {shippingAddress[index].street},{" "}
                          {shippingAddress[index].city}
                          {shippingAddress[index].states} <br />{" "}
                          {shippingAddress[index].zipcode}
                          <br /> USA
                        </li>
                        <li className="billing">
                          Billing Information{" "}
                          <i
                            className="fa fa-pencil"
                            onClick={() => this.open("showPayment")}
                          />
                        </li>
                        <li>
                          {data.cardList[0].brand} •••• •••• ••••{" "}
                          {data.cardList[0].last4}
                        </li>

                        <div className="checkout_recurring-charge">
                          Your membership renews automatically. You can cancel
                          any time.
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <button
                  tabIndex="0"
                  type="orange"
                  className="absolute_no"
                  onClick={this.onChargeCustomer}
                >
                  Confirm & Start Visit
                </button>
              </>
            )}
          </>
        )}
      </>
    );
  }
}

export default withRouter(ConfirmOrder);

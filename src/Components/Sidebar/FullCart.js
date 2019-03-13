import React, { Component } from "react";
import Cart from "./Cart";
import Shipping from "./Shipping";
import ConfirmOrder from "./ConfirmOrder";
import CartPaymentContainer from "./CartPaymentContainer";
import Login from "./Login";
import DateOfBirth from "./DateOfBirth";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  addNewPaymentRequest,
  getAllCardsRequest,
  chargeCustomerRequest,
  updateAppointmentRequest,
  removeFromCartRequest
} from "../../actions";

/**Parent Component for rendering Cart, DateOfBirth, Cart Payment,
 * ConfirmOrder and Login */
class FullCart extends Component {
  state = {
    next: 1
  };

  componentDidMount() {
    const { uid } = this.props.user.data;
    const {
      userProfile: {
        data: { customerId }
      }
    } = this.props;
    if (!this.props.payment.card.isSuccess && uid && customerId) {
      this.props.getAllCardsRequest({ uid });
    }
  }

  componentDidUpdate(prevProps) {
    const { uid } = this.props.user.data;

    if (
      this.props.userProfile.data.customerId &&
      prevProps.userProfile.data.customerId !==
        this.props.userProfile.data.customerId
    ) {
      this.props.getAllCardsRequest({ uid });
    }
  }
  /**Calls action for adding new payment */
  onAddNewPayment = data => {
    const { uid, email } = this.props.user.data;
    this.props.addNewPaymentRequest({ uid, email, ...data });
  };

  /**Charges customer for order */
  onChargeCustomer = (address, cardId) => {
    const { uid, email } = this.props.user.data;
    this.props.chargeCustomerRequest({
      uid,
      email,
      cardId,
      address: { ...address }
    });
  };

  /**Updates approval status after placing order */
  onUpdateAppointment = data => {
    const { uid } = this.props.user.data;
    this.props.updateAppointmentRequest({ uid, ...data });
  };

  /**Increment the state for rendering item */
  renderNext = () => {
    if (!this.props.user.auth) {
      this.setState({ next: 10 });
    } else if (this.state.next < 3) {
      this.setState(prevState => ({ next: prevState.next + 1 }));
    }
  };

  /**Closes sidebar when clicked on Shop All */
  onPressShopAll = () => {
    this.props.closeSidebar();
    this.props.history.push("/");
  };

  /**Render items accoriding to 'next' state.
   * If a customer is not logged it will render Login screen.
   * Firstly it will render Cart with Product. If there is no date of birth
   * of customer, a form for adding Date of birth is shown. After that
   * it will check for Shipping Address of Customer, if it's not there
   * a form for adding Shipping Address is shown. Then it checks if a
   * customer have any payment method added, if not it shows a form for adding
   * Payment method. And lastly it will render Confirm Order.
   */
  _renderItem = () => {
    switch (this.state.next) {
      case 1:
        return (
          <Cart
            onPressShopAll={this.onPressShopAll}
            renderNext={this.renderNext}
          />
        );
      case 2:
        return !this.props.userProfile.isLoading ? (
          this.props.userProfile.data.dateOfBirth ? (
            this.props.userProfile.data.shippingAddress ? (
              this.props.payment.card.data.cardList &&
              this.props.payment.card.data.cardList.length ? (
                <ConfirmOrder
                  payment={this.props.payment}
                  userProfile={this.props.userProfile}
                  onAddNewPayment={this.onAddNewPayment}
                  onChargeCustomer={this.onChargeCustomer}
                  onUpdateAppointment={this.onUpdateAppointment}
                  closeSidebar={this.props.closeSidebar}
                  removeFromCart={this.props.removeFromCartRequest}
                />
              ) : (
                <CartPaymentContainer
                  onAddNewPayment={this.onAddNewPayment}
                  renderNext={this.renderNext}
                  payment={this.props.payment}
                />
              )
            ) : (
              <Shipping renderNext={this.renderNext} />
            )
          ) : (
            <DateOfBirth />
          )
        ) : (
          <div className="loader-container">
            <div className="login-loader">
              <div>Loading your account...</div>
              <div>Hang tight</div>
              <div className="loader" />
            </div>
          </div>
        );

      case 10:
        return <Login addedProduct closeSidebar={this.props.closeSidebar} />;
      default:
        return;
    }
  };
  render() {
    return <>{this._renderItem()}</>;
  }
}
const mapStateToProps = ({ user, profile: { userProfile }, payment }) => ({
  user,
  userProfile,
  payment
});

export default connect(
  mapStateToProps,
  {
    addNewPaymentRequest,
    getAllCardsRequest,
    chargeCustomerRequest,
    updateAppointmentRequest,
    removeFromCartRequest
  }
)(withRouter(FullCart));

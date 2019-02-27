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
  onAddNewPayment = data => {
    const { uid, email } = this.props.user.data;
    this.props.addNewPaymentRequest({ uid, email, ...data });
  };
  onChargeCustomer = data => {
    const { uid, email } = this.props.user.data;
    this.props.chargeCustomerRequest({ uid, email, address: { ...data } });
  };
  onUpdateAppointment = data => {
    const { uid } = this.props.user.data;
    this.props.updateAppointmentRequest({ uid, ...data });
  };
  renderNext = () => {
    if (!this.props.user.auth) {
      this.setState({ next: 10 });
    } else if (this.state.next < 3) {
      this.setState(prevState => ({ next: prevState.next + 1 }));
    }
  };
  onPressShopAll = () => {
    this.props.closeSidebar();
    this.props.history.push("/");
  };
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
        return this.props.userProfile.data.dateOfBirth ? (
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
        );

      case 3:
        return this.props.payment.card.data.cardList &&
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
        );

      case 10:
        return <Login closeSidebar={this.props.closeSidebar} />;
      default:
        return;
    }
  };
  render() {
    console.log(this.state);
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

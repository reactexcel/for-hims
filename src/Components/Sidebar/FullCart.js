import React, { Component } from "react";
import Cart from "./Cart";
import Shipping from "./Shipping";
import ConfirmOrder from "./ConfirmOrder";
import Payment from "./Payment";
import VerifyAddress from "./VerifyAddress";

export default class FullCart extends Component {
  state = {
    next: 1
  };
  renderNext = () => {
    this.setState(prevState => ({ next: prevState.next + 1 }));
  };
  _renderItem = () => {
    switch (this.state.next) {
      case 1:
        return <Cart renderNext={this.renderNext}/>;
      case 2:
        return <Shipping renderNext={this.renderNext}/>;
      case 3:
        return <VerifyAddress renderNext={this.renderNext}/>;
      case 4:
        return <Payment renderNext={this.renderNext}/>;
      case 5:
        return <ConfirmOrder/>;
      default:
        return;
    }
  };
  render() {
    return <>{this._renderItem()}</>;
  }
}

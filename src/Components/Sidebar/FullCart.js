import React, { Component } from "react";
import Cart from "./Cart";
import Shipping from "./Shipping";
import ConfirmOrder from "./ConfirmOrder";
import Payment from "./Payment";
import VerifyAddress from "./VerifyAddress";
import Login from "./Login";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DateOfBirth from "./DateOfBirth";

class FullCart extends Component {
  state = {
    next: 1
  };
  renderNext = () => {
    if (!this.props.user.auth) {
      this.setState({ next: 10 });
    } else if (this.state.next < 5) {
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
            <VerifyAddress renderNext={this.renderNext} />
          ) : (
            <Shipping renderNext={this.renderNext} />
          )
        ) : (
          <DateOfBirth />
        );

      case 3:
        return <Payment renderNext={this.renderNext} />;
      case 4:
        return <ConfirmOrder />;
      case 10:
        return <Login closeSidebar={this.props.closeSidebar} />;
      default:
        return;
    }
  };
  render() {
    return <>{this._renderItem()}</>;
  }
}
const mapStateToProps = ({ user, profile: { userProfile } }) => ({
  user,
  userProfile
});

export default connect(mapStateToProps)(withRouter(FullCart));

import React, { Component } from "react";
import Cart from "./Cart";
import Shipping from "./Shipping";
import ConfirmOrder from "./ConfirmOrder";
import Payment from "./Payment";
import VerifyAddress from "./VerifyAddress";
import Login from "./Login";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class FullCart extends Component {
  state = {
    next: 1
  };
  renderNext = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (!this.props.login.auth && !auth) {
      this.setState({ next: 10 });
    } else if (this.state.next < 6) {
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
        return <Shipping renderNext={this.renderNext} />;
      case 3:
        return <VerifyAddress renderNext={this.renderNext} />;
      case 4:
        return <Payment renderNext={this.renderNext} />;
      case 5:
        return <ConfirmOrder />;
      case 10:
        return <Login />;
      default:
        return;
    }
  };
  render() {
    return <>{this._renderItem()}</>;
  }
}
const mapStateToProps = ({ login }) => ({ login });

export default connect(mapStateToProps)(withRouter(FullCart));

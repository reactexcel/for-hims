import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import Orders from "../Components/Orders";
import MyOrders from "../Components/MyOrders";

class OrdersContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Orders /> */}
        <MyOrders />
        <Footer />
      </div>
    );
  }
}

export default OrdersContainer;

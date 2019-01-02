import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import Home from "../Components/Home";

class HomeContainer extends Component {
  render() {
    return (
      <>
        <div className="free_shipping_promo">free shipping on all orders</div>
        <div className="blank_space" />
        <Header />
        <Home />
        <Footer />
      </>
    );
  }
}

export default HomeContainer;

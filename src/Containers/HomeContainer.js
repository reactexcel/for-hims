import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import Home from "../Components/Home";
import { connect } from "react-redux";
import { addToCartRequest } from "../actions";

class HomeContainer extends Component {
  onAddProduct = () => {
    this.props.addToCartRequest();
  };

  render() {
    return (
      <>
        <div className="free_shipping_promo">free shipping on all orders</div>
        <div className="blank_space" />
        <Header />
        <Home onAddProduct={this.onAddProduct} />
        <Footer />
      </>
    );
  }
}

export default connect(
  null,
  { addToCartRequest }
)(HomeContainer);

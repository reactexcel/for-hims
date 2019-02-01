import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import Home from "../Components/Home";
import { connect } from "react-redux";
import { addToCartRequest } from "../actions";
import Sidebar from "../Components/Generic/Sidebar";

class HomeContainer extends Component {
  state = { openSidebar: false };
  onAddProduct = () => {
    this.props.addToCartRequest();
    setTimeout(this.openCart, 400);
  };
  openCart = () => this.setState({ openSidebar: true });
  render() {
    return (
      <>
        <div className="blank_space" />
        <Header />
        <Home onAddProduct={this.onAddProduct} />
        <Sidebar
          openSidebar={this.state.openSidebar}
          side={"right"}
          content={"cart"}
          closeSidebar={() => {
            this.setState({
              openSidebar: false
            });
          }}
        />
        <Footer />
      </>
    );
  }
}

export default connect(
  null,
  { addToCartRequest }
)(HomeContainer);

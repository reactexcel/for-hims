import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import Home from "../Components/Home";
import { connect } from "react-redux";
import { addToCartRequest } from "../actions";
import Sidebar from "../Components/Generic/Sidebar";

/**Parent Component for Home component */
class HomeContainer extends Component {
  state = { openSidebar: false, sidebarContent: "signup" };
  onAddProduct = () => {
    this.props.addToCartRequest();
    setTimeout(this.openCart, 400);
  };
  openCart = () => this.setState({ openSidebar: true, sidebarContent: "cart" });
  openLogin = () => this.setState({ openSidebar: true, sidebarContent: "signup" });
  render() {
    const {
      data: { role }
    } = this.props.userProfile;
    return (
      <>
        <div className="blank_space" />
        <Header />
        <Home
          role={role}
          onAddProduct={this.onAddProduct}
          openLogin ={this.openLogin}
          user={this.props.user}
        />
        <Sidebar
          openSidebar={this.state.openSidebar}
          side={"right"}
          content={this.state.sidebarContent}
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

const mapStateToProps = ({ profile: { userProfile }, user }) => ({
  userProfile,
  user
});
export default connect(
  mapStateToProps,
  { addToCartRequest }
)(HomeContainer);

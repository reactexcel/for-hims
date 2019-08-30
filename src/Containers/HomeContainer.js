import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import Home from "../Components/Home";
import { connect } from "react-redux";
import { addToCartRequest ,loginFromStartRequest} from "../actions";
import Sidebar from "../Components/Generic/Sidebar";

/**Parent Component for Home component */
class HomeContainer extends Component {
  state = { openSidebar: false, sidebarContent: "signup" };

  componentDidUpdate(preProps){
    const {auth} = this.props.user
    if(auth && auth !== preProps.user.auth){
      this.onAddProduct()
    }
  }

  onAddProduct = () => {
    this.props.addToCartRequest();
    this.props.loginFromStartRequest("cart")
    setTimeout(this.openCart, 400);
  };
  openCart = () => this.setState({ openSidebar: true, sidebarContent: "cart" });
  openLogin = (authType) =>{ 
    const {sidebarContent} =this.props.user
    this.props.loginFromStartRequest(authType ? authType : "login" )
    this.setState({ openSidebar: true, sidebarContent: sidebarContent })}
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
          content={this.props.user.sidebarContent}
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
  { addToCartRequest,loginFromStartRequest }
)(HomeContainer);

import React, { Component } from "react";
import hims_logo from "../../assets/images/hims_logo.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: false
    };
    this.headerRef = null;

    this.setHeaderRef = element => {
      this.headerRef = element;
    };
  }

  _openSidebar = (side, content) => {
    this.setState({
      openSidebar: side,
      sidebarContent: content
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener(this.handleScroll);
  }
  handleScroll = e => {
    if (this.headerRef) {
      if (
        this.headerRef.getBoundingClientRect().height <
        document.documentElement.scrollTop
      ) {
        this.headerRef.classList.add("scrolled");
      } else {
        this.headerRef.classList.remove("scrolled");
      }
    }
  };

  render() {
    return (
      <>
        <div
          className="navbar navbar-default navbar-fixed-top"
          role="navigation"
          ref={this.setHeaderRef}
        >
          <div className="container">
            <div className="cart_desktop">
              <a href="#" onClick="openNav1()">
                Cart
              </a>
            </div>
            <div className="header_logo">
              <Link to="/">
                <img src={hims_logo} title="hime" alt="hime" />
              </Link>
            </div>

            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>

            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li onClick={() => this._openSidebar("left", "account")}>
                  <Link to="#"> Account </Link>
                </li>
                <li
                  onClick={() => this._openSidebar("left", "shipping_address")}
                >
                  <Link to="#"> Shipping Address </Link>
                </li>
                <li onClick={() => this._openSidebar("left", "verify_address")}>
                  <Link to="#"> Verify address </Link>
                </li>
                <li onClick={() => this._openSidebar("left", "action_items")}>
                  <Link to="#"> Action Items </Link>
                </li>
                <li onClick={() => this._openSidebar("right", "confirm_order")}>
                  <Link to="#"> Confirm Order </Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li
                  className="mobile_none"
                  onClick={() => this._openSidebar("right", "cart")}
                >
                  <Link to="#">Cart </Link>
                </li>
                <li onClick={() => this._openSidebar("right", "login")}>
                  <Link to="#">Login </Link>
                </li>
                <li onClick={() => this._openSidebar("right", "sign_up")}>
                  <Link to="#">Sign up </Link>
                </li>
                <li onClick={() => this._openSidebar("right", "shop")}>
                  <Link to="#">Shop </Link>
                </li>
                <li onClick={() => this._openSidebar("right", "shipping")}>
                  <Link to="#">Shipping </Link>
                </li>
                <li onClick={() => this._openSidebar("right", "payment")}>
                  <Link to="#">Payment </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        {this.state.openSidebar !== false ? (
          <Sidebar
            openSidebar={this.state.openSidebar}
            content={this.state.sidebarContent}
            closeSidebar={() => {
              console.log("asdasdasdasdasdasdasd");
              this.setState({
                openSidebar: false
              });
            }}
          />
        ) : null}
      </>
    );
  }
}

export default Header;

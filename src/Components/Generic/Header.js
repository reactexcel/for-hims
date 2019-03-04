import React, { PureComponent } from "react";
import noleuderm_logo from "../../assets/images/logo.png";
import Sidebar from "./Sidebar";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import requireAuthentication from "../../hoc/requireAuthentication";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: false,
      side: ""
    };
    this.headerRef = null;

    this.setHeaderRef = element => {
      this.headerRef = element;
    };
  }

  _openSidebar = (side, content) => {
    this.setState({
      openSidebar: true,
      side: side,
      sidebarContent: content
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = e => {
    if (this.headerRef) {
      if (
        this.headerRef.getBoundingClientRect().height <
          document.documentElement.scrollTop ||
        document.body.scrollTop
      ) {
        this.headerRef.classList.add("scrolled");
      } else {
        this.headerRef.classList.remove("scrolled");
      }
    }
  };
  handleMobileNav = () => {
    let navbar = document.querySelector(".navbar-collapse.collapse");
    if ([...navbar.classList].includes("in")) {
      navbar.classList.remove("in");
    } else {
      navbar.classList.add("in");
    }
  };
  render() {
    const {
      user: { isSuccess: loginSuccess, auth },
      addcart: { addToCart }
    } = this.props;
    return (
      <>
        <div
          className="navbar navbar-default navbar-fixed-top"
          role="navigation"
          ref={this.setHeaderRef}
        >
          <div className="container">
            <div className="cart_desktop">
              <span onClick={() => this._openSidebar("right", "cart")}>
                Cart
              </span>
            </div>
            <div className="header_logo">
              <Link to="/">
                <img src={noleuderm_logo} title="hime" alt="hime" />
              </Link>
            </div>

            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                onClick={this.handleMobileNav}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>

            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li onClick={() => this._openSidebar("right", "shop")}>
                  <Link to="#">Shop</Link>
                </li>
                <li
                  className="mobile_none"
                  onClick={() => this._openSidebar("right", "cart")}
                >
                  <Link to="#">Cart{addToCart && "(1)"} </Link>
                </li>

                {loginSuccess && auth ? (
                  <li onClick={() => this._openSidebar("right", "account")}>
                    <Link to="#"> Account </Link>
                  </li>
                ) : (
                  <li onClick={() => this._openSidebar("right", "login")}>
                    <Link to="#">Login </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <Sidebar
          openSidebar={this.state.openSidebar}
          side={this.state.side}
          content={this.state.sidebarContent}
          closeSidebar={() => {
            this.setState({
              openSidebar: false
            });
          }}
        />
      </>
    );
  }
}
const mapStateToProps = ({ user, addcart }) => ({ user, addcart });
export default connect(mapStateToProps)(
  withRouter(requireAuthentication(Header))
);

import React, { Component } from "react";
import Account from "../Sidebar/Account";
import FullCart from "../Sidebar/FullCart";
import Login from "../Sidebar/Login";
import Shop from "../Sidebar/Shop";
import Learn from "../Sidebar/Learn";
import isMobile from "../../hoc/isMobile";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.sideBarRef = null;

    this.setSideBarRef = element => {
      this.sideBarRef = element;
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.sideBarRef && !this.sideBarRef.contains(event.target)) {
      this.props.closeSidebar();
    }
  };

  _renderItem = param => {
    switch (param) {
      case "account":
        return <Account />;
      case "cart":
        return <FullCart closeSidebar={this.props.closeSidebar} />;
      case "login":
        return <Login />;
      case "shop":
        return <Shop />;
      case "learn":
        return <Learn />;
      default:
        return;
    }
  };

  render() {
    const { openSidebar, side, isMobile } = this.props;
    
    let closeIconClass =
      side === "left"
        ? "glyphicon glyphicon-menu-left"
        : "glyphicon glyphicon-menu-right";
    const width = openSidebar ? (isMobile ? "100%" : "45%") : 0;

    return (
      <div
        ref={this.setSideBarRef}
        id="mySidenav7"
        style={{
          width: width
        }}
        className={`side${side}`}
      >
        {openSidebar && (
          <a href="#" className="closebtn" onClick={this.props.closeSidebar}>
            <span className={closeIconClass} />
          </a>
        )}
        {this._renderItem(this.props.content)}
      </div>
    );
  }
}

export default isMobile(Sidebar);

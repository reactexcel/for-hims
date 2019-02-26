import React, { Component } from "react";
import Account from "../Sidebar/Account";
import FullCart from "../Sidebar/FullCart";
import Login from "../Sidebar/Login";
import Shop from "../Sidebar/Shop";
import isTablet from "../../hoc/isTablet";

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
        return <Account closeSidebar={this.props.closeSidebar} />;
      case "cart":
        return <FullCart closeSidebar={this.props.closeSidebar} />;
      case "login":
        return <Login closeSidebar={this.props.closeSidebar} />;
      case "shop":
        return <Shop />;
      default:
        return;
    }
  };

  render() {
    const { openSidebar, side, isTablet } = this.props;

    let closeIconClass =
      side === "left"
        ? "glyphicon glyphicon-menu-left"
        : "glyphicon glyphicon-menu-right";
    const width = openSidebar ? (isTablet ? "100%" : "45%") : 0;

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
          <button className="closebtn" onClick={this.props.closeSidebar}>
            <span className={closeIconClass} />
          </button>
        )}
        {this._renderItem(this.props.content)}
      </div>
    );
  }
}

export default isTablet(Sidebar);

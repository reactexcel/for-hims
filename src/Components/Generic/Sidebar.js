import React, { Component } from "react";
import Account from "../Sidebar/Account";
import FullCart from "../Sidebar/FullCart";
import Login from "../Sidebar/Login";
import Shop from "../Sidebar/Shop";
import Learn from "../Sidebar/Learn";

class Sidebar extends Component {
  _renderItem = param => {
    switch (param) {
      case "account":
        return <Account />;
      case "cart":
        return <FullCart />;
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
    const { openSidebar, side } = this.props;
    let closeIconClass =
      side === "left"
        ? "glyphicon glyphicon-menu-left"
        : "glyphicon glyphicon-menu-right";
    const width = openSidebar ? "45%" : 0;

    return (
      <div
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

export default Sidebar;

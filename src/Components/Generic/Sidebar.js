import React, { Component } from "react";
import Account from "../Sidebar/Account";
import FullCart from "../Sidebar/FullCart";
import Login from "../Sidebar/Login";
import SignUp from "../Sidebar/SignUp";
import Shop from "../Sidebar/Shop";
import isTablet from "../../hoc/isTablet";

/**UI component for Sidebar of the App */
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
  /**Closes the Sidebar when clicked anywhere outside of Sidebar */
  handleClickOutside = event => {
    if (this.sideBarRef && !this.sideBarRef.contains(event.target)) {
      this.props.closeSidebar();
    }
  };

  /**Render a component in Sidebar
   * @param {string} param component to be rendered
   * @returns Returns a Component which will be rendered
   */
  _renderItem = param => {
    switch (param) {
      case "account":
        return <Account closeSidebar={this.props.closeSidebar} />;
      case "cart":
        return <FullCart closeSidebar={this.props.closeSidebar} />;
      case "login":
        return <Login closeSidebar={this.props.closeSidebar}/>;
      case "signup":
        return <SignUp closeSidebar={this.props.closeSidebar}/>;
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

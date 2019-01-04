import React, { Component } from "react";
import { Link } from "react-router-dom";
import baseline from "../../assets/images/baseline-error.svg";
import ActionItems from "./ActionItems";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showActionRequired: false
    };
  }
  toggleActionRequired = () => {
    this.setState(prevState => ({
      showActionRequired: !prevState.showActionRequired
    }));
  };
  render() {
    const { showActionRequired } = this.state;
    return (
      <>
        {!showActionRequired ? (
          <div className="profile_menu_box">
            <h4> Hi there! </h4>
            <ul className="profile_menu">
              <li>
                <Link
                  to=""
                  id="required-action"
                  onClick={this.toggleActionRequired}
                >
                  <img src={baseline} alt="error" />
                  Required Action
                </Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/messages">Messages</Link>
              </li>
              <li>
                <Link to="#">Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <ActionItems closeActionItems = {this.toggleActionRequired}/>
        )}
      </>
    );
  }
}

export default Account;

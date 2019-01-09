import React, { Component } from "react";
import { Link } from "react-router-dom";
import baseline from "../../assets/images/baseline-error.svg";
import ActionItems from "./ActionItems";
import { connect } from "react-redux";
import { logoutRequest } from "../../actions";
import Login from "./Login";

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
  handleLogout = () => {
    this.props.logoutRequest();
  };
  render() {
    const { showActionRequired } = this.state;
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (!auth) {
      return <Login />;
    }
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
                <Link to="" onClick={this.handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <ActionItems closeActionItems={this.toggleActionRequired} />
        )}
      </>
    );
  }
}
const mapStateToProps = ({ login, signup }) => ({ login, signup });
export default connect(
  mapStateToProps,
  { logoutRequest }
)(Account);

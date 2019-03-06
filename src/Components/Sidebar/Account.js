import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionItems from "./ActionItems";
import { connect } from "react-redux";
import { logoutRequest } from "../../actions";
import Login from "./Login";
import * as ROLES from "../../constants/roles";

/**UI component for showing links related to Account Information*/
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showActionRequired: false
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.user.isSuccess &&
      prevProps.user.isSuccess !== this.props.user.isSuccess
    ) {
      this.props.closeSidebar();
    }
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
    const { auth } = this.props.user;
    const {
      data: { firstName, role }
    } = this.props.userProfile;
    if (!auth) {
      return <Login />;
    }
    return (
      <>
        {!showActionRequired ? (
          <div className="profile_menu_box">
            <h4> Hi {firstName ? firstName : "there"}! </h4>
            <ul className="profile_menu">
              {/* <li>
                <Link
                  to=""
                  id="required-action"
                  onClick={this.toggleActionRequired}
                >
                  <img src={baseline} alt="error" />
                  Required Action
                </Link>
              </li> */}
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              {role === ROLES.CUSTOMER && (
                <li>
                  <Link to="/messages">Messages</Link>
                </li>
              )}
              {role === ROLES.ADMIN && (
                <>
                  <li>
                    <Link to="/create-doctor">Create Doctor's Account</Link>
                  </li>
                </>
              )}
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
const mapStateToProps = ({ user, profile: { userProfile } }) => ({
  user,
  userProfile
});
export default connect(
  mapStateToProps,
  { logoutRequest }
)(Account);

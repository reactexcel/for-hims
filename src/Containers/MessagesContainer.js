import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import { connect } from "react-redux";
import MessageDoctor from "../Components/Message/MessageDoctor"
import MessageUser from "../Components/Message/MessageUser"
import "../assets/css/message.scss"
import * as role from "../constants/roles";

class MessagesContainer extends Component {
  render() {
    const { data } = this.props.userProfile;
    return (
      <div className="message-container">
        <Header />
        <div className="message-role container">
          {data.role === role.DOCTOR ? <MessageDoctor /> : <MessageUser />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  orders,
  profile: { userProfile },
  customerDetails
}) => ({
  orders,
  userProfile,
  customerDetails
});
export default connect(
  mapStateToProps,
  {}
)(MessagesContainer);

import React, { Component } from "react";
import MessageSideList from "./MessageSideList";
import MessageReply from "./MessageReply";
import { connect } from "react-redux";
import { areaUserRequest } from "../../actions/index";
import isEqual from "lodash/isEqual";
import {getAllMessageRequest} from "../../actions/index"
class MessageDoctor extends Component {
  state = { stateFilteredUser: [], activeCustomer: {}, replyMessage: "" };

  componentDidMount() {
    const {
      shippingAddress: { states }
    } = this.props.userProfile.data;

    this.props.areaUserRequest({ states });
  }
  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.stateUser.data, this.props.stateUser.data)) {
      this.setState({
        stateFilteredUser: this.props.stateUser.data
      });
    }
  }
  onCustomerClick = user => {
    this.setState({
      activeCustomer: user
    });
    let uid=user.uid
    this.props.getAllMessageRequest({uid})
  };
  onMessageReply = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.state, "yyyyyyyyyyyyyy");

    return (
      <div className="message-doctor-container">
        <div className="user-list-container">
          {this.state.stateFilteredUser.map((element, i) => (
            <MessageSideList
              key={element.uid}
              user={element}
              onCustomerClick={this.onCustomerClick}
            />
          ))}
        </div>
        <div className="messsage-reply-container">
          <MessageReply
            onMessageReply={this.onMessageReply}
            replyMessage={this.state.replyMessage}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  profile: { userProfile },
  message: { stateUser },
  message
}) => ({
  stateUser,
  userProfile,
  message
});
export default connect(
  mapStateToProps,
  { areaUserRequest,getAllMessageRequest }
)(MessageDoctor);

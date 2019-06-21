import React, { Component } from "react";
import MessageSideList from "./MessageSideList";
import MessageReply from "./MessageReply";
import { connect } from "react-redux";
import { areaUserRequest } from "../../actions/index";
import isEqual from "lodash/isEqual";
import {
  getAllMessageRequest,
  sendMessageRequest,
  fetchStateDoctorRequest
} from "../../actions/index";
import cloneDeep from "lodash/cloneDeep";

class MessageUser extends Component {
  state = {
    stateFilteredUser: [],
    activeCustomer: {},
    replyMessage: "",
    customerMessage: [],
    sendCustomerMessage: ""
  };

  componentDidMount() {
    const { shippingAddress } = this.props.userProfile.data;

    let state = shippingAddress[0].states;
    console.log(this.props,'kkkkkkkkkkkk', "888888888888888");
    this.props.fetchStateDoctorRequest({ state });
  }
  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.stateUser.data, this.props.stateUser.data)) {
      console.log(this.props.stateUser.data, "kkkkkkkkkkk");
      let data = [this.props.stateUser.data];
      this.setState({
        stateFilteredUser: data
      });
    }
    if (!isEqual(prevProps.message.data, this.props.message.data)) {
      this.setState({
        customerMessage: this.props.message.data
      });
    }
  }
  onCustomerClick = user => {
    this.setState({
      activeCustomer: user,
    });
    const {uid} = this.props;
    // console.log(this.props,'bbbbbbbbbbbbbbb');
    
    this.props.getAllMessageRequest({ uid });
  };
  onMessageReply = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSendClick = e => {
    if (e.keyCode === 13 || e.keyCode === undefined) {
      const messageSendCustomer = {
        messageCustomer: this.state.replyMessage,
        doctorRead: false,
        customerRead: true,
        timestamp: new Date(),
        uid: this.props.uid
      };
      let clonedCustomerMessage = cloneDeep(this.state.customerMessage);
      clonedCustomerMessage[this.props.uid].push(messageSendCustomer);
      this.setState({
        sendCustomerMessage: this.state.replyMessage,
        customerMessage: clonedCustomerMessage,
        replyMessage: ""
      });
      this.props.sendMessageRequest(messageSendCustomer);
    }
  };

  render() {
    const { data } = this.props.message;
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
            sendCustomerMessage={this.state.sendCustomerMessage}
            selectedCustomerMessage={this.state.customerMessage[this.props.uid]}
            onSendClick={this.onSendClick}
            replyMessage={this.state.replyMessage}
            doctorClass="left"
            customerClass="right"
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
  message,
}) => ({
  stateUser,
  userProfile,
  message
});
export default connect(
  mapStateToProps,
  { getAllMessageRequest, sendMessageRequest, fetchStateDoctorRequest }
)(MessageUser);

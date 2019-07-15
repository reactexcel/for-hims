import React, { Component } from "react";
import MessageSideList from "./MessageSideList";
import MessageReply from "./MessageReply";
import { connect } from "react-redux";
import { areaUserRequest } from "../../actions/index";
import isEqual from "lodash/isEqual";
import { getAllMessageRequest, sendMessageRequest } from "../../actions/index";
import cloneDeep from "lodash/cloneDeep";
class MessageDoctor extends Component {
  state = {
    stateFilteredUser: [],
    activeCustomer: {},
    replyMessage: "",
    customerMessage: [],
    sendCustomerMessage: ""
  };

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
    if (!isEqual(prevProps.message.data, this.props.message.data)) {
      this.setState({
        customerMessage: this.props.message.data
      });
    }
  }
  onCustomerClick = user => {
    this.setState({
      activeCustomer: user,
      uid: user.uid
    });
    let uid = user.uid;
    this.props.getAllMessageRequest({ uid });
  };
  onMessageReply = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSendClick = e => {
    if (e.keyCode === 13 || e.keyCode === undefined){
    const messageSendCustomer = {
      messageDoctor: this.state.replyMessage,
      doctorRead: true,
      customerRead: false,
      timestamp: new Date(),
      uid:this.state.uid
    };
    let clonedCustomerMessage = cloneDeep(this.state.customerMessage);
    clonedCustomerMessage[this.state.uid].push(messageSendCustomer);
    this.setState({
      sendCustomerMessage: this.state.replyMessage,
      customerMessage: clonedCustomerMessage,
      replyMessage:""
    });
      this.props.sendMessageRequest(messageSendCustomer);
    }
  };
  render() {
    const { data } = this.props.message;
    return (
      <div className="message-doctor-container">
        <div className="user-list-container">
         {this.state.stateFilteredUser.length?
          this.state.stateFilteredUser.map((element, i) => (
            <MessageSideList
              key={element.uid}
              user={element}
              onCustomerClick={this.onCustomerClick}
            />
          )):"Loading ..."
        }
         
        </div>
        <div className="messsage-reply-container">
          <MessageReply
            onMessageReply={this.onMessageReply}
            sendCustomerMessage={this.state.sendCustomerMessage}
            selectedCustomerMessage={this.state.customerMessage[this.state.uid]}
            onSendClick={this.onSendClick}
            replyMessage={this.state.replyMessage}
            activeCustomer={this.state.activeCustomer}
            doctorClass="right"
            customerClass="left"
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
  { areaUserRequest, getAllMessageRequest, sendMessageRequest }
)(MessageDoctor);

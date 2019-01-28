import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import Messages from "../Components/Messages";
import { sendMessageRequest } from "../actions";
import { connect } from "react-redux";
import { map } from "@firebase/util";

class MessagesContainer extends Component {
  onSendMessage = message => {
    const { uid } = this.props;
    this.props.sendMessageRequest({ uid, message });
  };

  render() {
    const { message } = this.props;
    return (
      <div>
        <Header />
        <Messages onSendMessage={this.onSendMessage} message={message} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ message }) => ({ message });

export default connect(
  mapStateToProps,
  { sendMessageRequest }
)(MessagesContainer);

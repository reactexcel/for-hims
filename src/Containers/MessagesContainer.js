import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import Messages from "../Components/Messages";
import { sendMessageRequest, getAllMessageRequest } from "../actions";
import { connect } from "react-redux";

class MessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMessageModal: false,
      sendMessage: false
    };
  }

  openMessageModal = () =>
    this.setState({ sendMessage: false, openMessageModal: true });

  closeMessageModal = () => this.setState({ openMessageModal: false });

  toggleTextMessageBox = () =>
    this.setState(prevState => ({ sendMessage: !prevState.sendMessage }));

  componentDidMount() {
    const { uid } = this.props;
    this.props.getAllMessageRequest({ uid });
  }
  componentDidUpdate(prevProps) {
    const { uid } = this.props;
    if (prevProps.uid !== this.props.uid) {
      this.props.getAllMessageRequest({ uid });
    }

    if (
      this.props.message.isSuccess &&
      prevProps.message.isSuccess !== this.props.message.isSuccess
    ) {
      this.closeMessageModal();
    }
  }
  onSendMessage = message => {
    const { uid } = this.props;
    this.props.sendMessageRequest({ uid, message });
  };

  render() {
    const { message } = this.props;
    return (
      <div>
        <Header />
        <Messages
          onSendMessage={this.onSendMessage}
          message={message}
          onOpenMessageModal={this.openMessageModal}
          closeMessageModal={this.closeMessageModal}
          toggleTextMessageBox={this.toggleTextMessageBox}
          openMessageModal={this.state.openMessageModal}
          sendMessage={this.state.sendMessage}
          history={this.props.history}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ message }) => ({ message });

export default connect(
  mapStateToProps,
  { sendMessageRequest, getAllMessageRequest }
)(MessagesContainer);

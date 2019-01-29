import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import Reply from "../Components/Reply";
import { sendMessageRequest } from "../actions";
import { connect } from "react-redux";

class ReplyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMessageModal: false,
      sendMessage: false
    };
  }
  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push("/messages");
    }
  }
  onSendMessage = message => {
    const { uid } = this.props;
    this.props.sendMessageRequest({ uid, message });
  };

  openMessageModal = () =>
    this.setState({ sendMessage: false, openMessageModal: true });

  closeMessageModal = () => this.setState({ openMessageModal: false });

  toggleTextMessageBox = () =>
    this.setState(prevState => ({ sendMessage: !prevState.sendMessage }));

  componentDidUpdate(prevProps) {
    if (
      this.props.message.isSuccess &&
      prevProps.message.isSuccess !== this.props.message.isSuccess
    ) {
      this.closeMessageModal();
    }
  }
  render() {
    const { message } = this.props;
    return (
      <div>
        <Header />
        <Reply
          message={
            this.props.location.state ? this.props.location.state.data : {}
          }
          messageState={message}
          onSendMessage={this.onSendMessage}
          onOpenMessageModal={this.openMessageModal}
          closeMessageModal={this.closeMessageModal}
          toggleTextMessageBox={this.toggleTextMessageBox}
          openMessageModal={this.state.openMessageModal}
          sendMessage={this.state.sendMessage}
        />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = ({ message }) => ({ message });
export default connect(
  mapStateToProps,
  { sendMessageRequest }
)(ReplyContainer);

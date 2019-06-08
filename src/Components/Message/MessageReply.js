import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
export default class MessageReply extends Component {
  state = {
    replyMessage: ""
  };
  handleReply = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { message, selectedCustomerMessage,replyMessage } = this.props;
    console.log(selectedCustomerMessage, "lllllllllll",replyMessage);

    return (
      <div>
        {message.isAPICalled ? (
          <>
            <div className="message-header">header</div>
            <div className="message-input">
              <div className="doctor-customer-message-container">
                {selectedCustomerMessage ? (
                  selectedCustomerMessage.map(element => (
                    <div className="doctor-customer-message">
                      {element.exists
                        ? element.data().messageDoctor
                        : element.messageDoctor}
                    </div>
                  ))
                ) : (
                  <Spinner animation="border" variant="info" />
                )}
              </div>
            </div>
            <div className="reply-input">
              <input
                type="text"
                name="replyMessage"
                value={this.props.replyMessage}
                onChange={this.props.onMessageReply}
                onKeyUp={this.props.onSendClick}
              />
              <button onClick={this.props.onSendClick}>Send Message</button>
            </div>
          </>
        ) : (
          "click on user to see message"
        )}
      </div>
    );
  }
}

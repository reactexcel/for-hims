import React, { Component } from "react";

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
      console.log(this.props.message.isAPICalled,'llllllllllllll');
      const {message}=this.props
    return (
      <div>
          {message.isAPICalled ?
          <>
        <div className="message-header">header</div>
        <div className="reply-input">
          <input
            type="text"
            name="replyMessage"
            value={this.props.replyMessage}
            onChange={this.props.onMessageReply}
          />
        </div>
        </>:
        "click on user to see message"
          }
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { validateMessage } from "../utils/validate";
import ErrorText from "./Generic/ErrorText";

class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMessageModal: false,
      sendMessage: false,
      message: "",
      error: {}
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    const error = validateMessage(this.state.message);
    this.setState({ error });
    if (!Object.keys(error).length) {
      this.props.onSendMessage(this.state.message);
    }
  };

  render() {
    const { message, error } = this.state;
    const {
      openMessageModal,
      sendMessage,
      onOpenMessageModal,
      closeMessageModal,
      toggleTextMessageBox
    } = this.props;
    const { message: messageBody, timestamp } = this.props.message;
    const {
      isLoading,
      isError,
      message: errorMessage
    } = this.props.messageState;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="action_required_section">
              <Link to="#" className="reply_btn" onClick={onOpenMessageModal}>
                Reply
              </Link>
              <Link to="/messages" className="back_btn">
                Back to Inbox
              </Link>
              <ReactModal
                isOpen={openMessageModal}
                contentLabel="MessageModal"
                closeTimeoutMS={400}
                overlayClassName="ReactModal__Overlay"
                className="ReactModal__Content"
                ariaHideApp={false}
              >
                {!sendMessage ? (
                  <>
                    <div
                      className="message-type_block"
                      onClick={closeMessageModal}
                    >
                      <h4>Contact Support</h4>
                      <div>
                        For all order and account related questions, contact our
                        support team.
                      </div>
                    </div>
                    <div
                      className="message-type_block"
                      onClick={toggleTextMessageBox}
                    >
                      <h4>Message your Doctor</h4>
                      <div>For all medical related inquiries.</div>
                    </div>
                    <div className="read" onClick={closeMessageModal}>
                      Back To Inbox
                    </div>
                  </>
                ) : (
                  <>
                    <div className="message-text-box">
                      <h4>Message</h4>
                      <input
                        type="text"
                        name="message"
                        value={message}
                        placeholder="Enter your message here..."
                        className={error.message ? "error" : ""}
                        onChange={this.handleChange}
                      />
                      {error.message && <ErrorText text={error.message} />}

                      <div className="message-text-box--actions">
                        <div className="submit-now" onClick={this.handleSubmit}>
                          {isLoading ? "Submitting..." : "Submit Now"}
                        </div>
                        <div onClick={closeMessageModal}>Cancel</div>
                      </div>
                    </div>
                    {isError && errorMessage && (
                      <div className="server_error">{errorMessage}</div>
                    )}
                  </>
                )}
              </ReactModal>
              {timestamp && (
                <div className="message_viewer_outer">
                  <h5 className="grew">
                    {new Date(timestamp.seconds * 1000)
                      .toUTCString()
                      .slice(4, -4)}
                  </h5>
                  <h4>{messageBody}</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reply;

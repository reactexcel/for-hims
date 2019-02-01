import React, { Component } from "react";
import ReactModal from "react-modal";
import { validateMessage } from "../utils/validate";
import ErrorText from "./Generic/ErrorText";
import { Link } from "react-router-dom";
import moment from "moment";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({ message: "" });
  };

  render() {
    const { message, error } = this.state;
    const {
      openMessageModal,
      sendMessage,
      onOpenMessageModal,
      closeMessageModal,
      toggleTextMessageBox,
      history
    } = this.props;
    const {
      isLoading,
      isError,
      data,
      message: errorMessage
    } = this.props.message;
    return (
      <>
        {data.length ? (
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="action_required_section">
                  <Link
                    to="#"
                    className="new-massage_btn"
                    onClick={onOpenMessageModal}
                  >
                    New Message
                  </Link>
                  {data.map(message => (
                    <div
                      className="messages_new_box"
                      key={message.id}
                      onClick={() =>
                        history.push({
                          pathname: `messages/${message.id}`,
                          state: {
                            data: message.data()
                          }
                        })
                      }
                    >
                      <i className="fa fa-envelope-o" />
                      <h4>{message.data().message}</h4>
                      <h5 className="grew">
                        {moment(message.data().timestamp.seconds * 1000).format(
                          "LLL"
                        )}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="orders_section">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="orders_box">
                      <h3>Inbox</h3>
                      <h4 className="grew"> You do not have any messages</h4>
                      <div className="read" onClick={onOpenMessageModal}>
                        New Message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </>
        )}
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
              <div className="message-type_block" onClick={closeMessageModal}>
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
              {isLoading ? (
                <div className="login-loader">
                  <div>Loading...</div>
                  <div>Hang tight</div>
                  <div className="loader" />
                </div>
              ) : (
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
                      Submit Now
                    </div>
                    <div onClick={closeMessageModal}>Cancel</div>
                  </div>
                  {isError && errorMessage && (
                    <div className="server_error">{errorMessage}</div>
                  )}
                </div>
              )}
            </>
          )}
        </ReactModal>
      </>
    );
  }
}

export default Messages;

import React, { Component } from "react";
import ReactModal from "react-modal";
import { validateMessage } from "../utils/validate";
import ErrorText from "./Generic/ErrorText";

class Messages extends Component {
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

  openMessageModal = () =>
    this.setState({ sendMessage: false, openMessageModal: true });
  closeMessageModal = () => this.setState({ openMessageModal: false });

  toggleTextMessageBox = () =>
    this.setState(prevState => ({ sendMessage: !prevState.sendMessage }));
  render() {
    const { openMessageModal, sendMessage, message, error } = this.state;
    const { isLoading, isError, isSuccess } = this.props.message;
    return (
      <>
        <div className="orders_section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="orders_box">
                  <h3>Inbox</h3>
                  <h4 className="grew"> You do not have any messages</h4>
                  <div className="read" onClick={this.openMessageModal}>
                    New Message
                  </div>
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
                          onClick={this.closeMessageModal}
                        >
                          <h4>Contact Support</h4>
                          <div>
                            For all order and account related questions, contact
                            our support team.
                          </div>
                        </div>
                        <div
                          className="message-type_block"
                          onClick={this.toggleTextMessageBox}
                        >
                          <h4>Message your Doctor</h4>
                          <div>For all medical related inquiries.</div>
                        </div>
                        <div className="read" onClick={this.closeMessageModal}>
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
                            <div
                              className="submit-now"
                              onClick={this.handleSubmit}
                            >
                              Submit Now
                            </div>
                            <div onClick={this.closeMessageModal}>Cancel</div>
                          </div>
                        </div>
                      </>
                    )}
                  </ReactModal>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </>
    );
  }
}

export default Messages;

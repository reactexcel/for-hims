import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import UploadPhoto from "./Generic/UploadPhoto";

class ActionRequired extends Component {
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

  render() {
    const { openMessageModal, sendMessage } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="action_required_section">
              <Link
                to="#"
                className="reply_btn"
                onClick={this.openMessageModal}
              >
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
                      onClick={this.closeMessageModal}
                    >
                      <h4>Contact Support</h4>
                      <div>
                        For all order and account related questions, contact our
                        support team.
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
                        // value={email}
                        placeholder="Enter your message here..."
                        onChange={this.handleChange}
                      />
                      <div className="message-text-box--actions">
                        <div className="submit-now">Submit Now</div>
                        <div onClick={this.closeMessageModal}>Cancel</div>
                      </div>
                    </div>
                  </>
                )}
              </ReactModal>
              <div className="message_viewer_outer">
                <h5 className="grew">May 28, 2018 11:08 AM</h5>
                <h4>
                  Your ID photo didn't meet our criteria. Please take a picture
                  of a government issued license that has your picture.
                </h4>
                <UploadPhoto />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActionRequired;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import WebCamera from "./Generic/WebCamera";
class ActionRequired extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      imageUrl: "",
      openMessageModal: false,
      sendMessage: false,
      openCamera: false
    };
    this.fileRef = null;
    this.setFileRef = element => {
      this.fileRef = element;
    };
  }

  openMessageModal = () =>
    this.setState({ sendMessage: false, openMessageModal: true });

  closeMessageModal = () => this.setState({ openMessageModal: false });

  toggleTextMessageBox = () =>
    this.setState(prevState => ({ sendMessage: !prevState.sendMessage }));

  handleFileChange = e => {
    this.setState({ file: Array.from(e.target.files) });
    const file = this.fileRef.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      this.setState({
        imageUrl: reader.result
      });
    } else {
      this.setState({
        imageUrl: ""
      });
    }
  };
  setImageFromCamera = imageUrl => {
    this.setState({ imageUrl });
  };
  clearImage = () => this.setState({ imageUrl: "", file: [] });

  toggleCamera = () =>
    this.setState(prevState => ({ openCamera: !prevState.openCamera }));
  render() {
    const { openCamera, openMessageModal, sendMessage, imageUrl } = this.state;

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
                {!imageUrl && (
                  <button tabIndex="0" className="photo_btn">
                    Select from Photo Library
                    <input
                      type="file"
                      accept="image/*"
                      className="file_btn"
                      title=""
                      ref={this.setFileRef}
                      onChange={this.handleFileChange}
                    />
                  </button>
                )}
                <div className="camera-container">
                  <img src={this.state.imageUrl} />
                </div>
                {imageUrl ? (
                  <div className="retake-use_container">
                    <button
                      tabIndex="0"
                      className="retake_btn"
                      onClick={this.clearImage}
                    >
                      Retake
                    </button>
                    <button className="use-photo_btn">Use Photo</button>
                  </div>
                ) : (
                  <div className="camera_icons">
                    <i className="fa fa-camera" onClick={this.toggleCamera} />
                    <ReactModal
                      isOpen={openCamera}
                      contentLabel="CameraModal"
                      closeTimeoutMS={400}
                      overlayClassName="ReactModal__Overlay"
                      className="ReactModal__Content"
                      ariaHideApp={false}
                    >
                      <i
                        className="fa fa-close close-camera_modal"
                        onClick={this.toggleCamera}
                      />
                      <WebCamera
                        setImageFromCamera={this.setImageFromCamera}
                        closeCameraModal={this.toggleCamera}
                      />
                    </ReactModal>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActionRequired;

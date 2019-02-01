import React, { Component } from "react";
import WebCamera from "./WebCamera";
import ReactModal from "react-modal";

export default class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      imageUrl: "",
      openCamera: false
    };
    this.fileRef = null;
    this.setFileRef = element => {
      this.fileRef = element;
    };
  }

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
    const { openCamera, imageUrl } = this.state;
    return (
      <>
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
          <img src={this.state.imageUrl} alt="" />
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
      </>
    );
  }
}

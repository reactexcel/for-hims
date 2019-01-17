import React, { Component } from "react";
import Webcam from "react-webcam";

class WebCamera extends Component {
  constructor(props) {
    super(props);
    this.webcam = null;

    this.setWebCamRef = webcam => {
      this.webcam = webcam;
    };
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.setImageFromCamera(imageSrc);
    this.closeCameraModal();
  };
  closeCameraModal = () => {
    this.props.closeCameraModal();
  };
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
      <>
        <Webcam
          audio={false}
          height={350}
          ref={this.setWebCamRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <div className="camera-btn_container">
          <button className="capture_btn" onClick={this.capture}>Capture photo</button>
          <button className="capture-close_btn" onClick={this.closeCameraModal}>Close</button>
        </div>
      </>
    );
  }
}
export default WebCamera;

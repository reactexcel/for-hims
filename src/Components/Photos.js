import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import WebCamera from "./Generic/WebCamera";

class Photos extends Component {
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
    const { file, openCamera, imageUrl } = this.state;
    return (
      <>
        <div className="emr_header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <h2 className="black"> Bailey Health of Pennsylvania P.C. </h2>
              </div>
              <div className="clearfix" />
              <ul className="tab_header questions_header_tab">
                <li className="active1">
                  <i className="fa fa-check-circle" />
                  <Link to="/informed-consent"> Informed Consent </Link>
                </li>
                <li className="active1">
                  <i className="fa fa-check-circle" />
                  <Link to="/questions"> Questions </Link>
                </li>
                <li className="active2">
                  <Link to="/photos"> Photos </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2"> </div>
            <div className="col-xs-12 col-sm-12 col-md-8">
              <div className="photos_taken">
                <h2> Take a photo of your face</h2>
                <h4> This photo must have be taken in the last 30 days.</h4>
                <h4>
                  This photo must be clear with a good resolution for medical
                  purposes.
                </h4>
                <h4 className="grew">
                  You can drag and drop a valid photo to upload.
                </h4>
                <h5 className="grew">
                  Allowed photo types: jpeg, png. Max photo size: 10MB.
                </h5>
                <ul className="viewbox_section">
                  <li className="circle1"> 1 </li>
                  <li className="circle_line"> &nbsp; </li>
                  <li className="circle2"> 2 </li>
                </ul>
                {(!file.length || !imageUrl) && (
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
                      Retakez
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
              <p align="center">
                Powered by Hims <br />
                <Link to="#" className="link">
                  Terms and Conditions
                </Link>
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2"> </div>
          </div>
        </div>
      </>
    );
  }
}

export default Photos;

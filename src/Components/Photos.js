import React, { Component } from "react";
import { Link } from "react-router-dom";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      imageUrl: ""
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
  render() {
    const { file } = this.state;
    console.log(file);
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
               {file.length > 0? false :true && <button tabIndex="0" className="photo_btn">
                  Select from Photo Library
                  <input
                    type="file"
                    accept="image/*"
                    className="file_btn"
                    title=""
                    ref={this.setFileRef}
                    onChange={this.handleFileChange}
                  />
                </button>}
                <div className="camera-container">
                  <img src={this.state.imageUrl}  />
                </div>
                {file.length ? (
                  <div className="retake-use_container">
                    <button tabIndex="0" className="retake_btn">
                      Retake
                      <input
                        type="file"
                        accept="image/*"
                        className="file_btn"
                        title=""
                        ref={this.setFileRef}
                        onChange={this.handleFileChange}
                      />
                    </button>
                    <button className="use-photo_btn">Use Photo</button>
                  </div>
                ) : (
                  <div className="camera_icons">
                    <i className="fa fa-camera" />
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

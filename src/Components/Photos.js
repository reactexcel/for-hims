import React, { Component } from "react";
import { Link } from "react-router-dom";

class Photos extends Component {
  render() {
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
                <button tabindex="0" type="button" className="photo_btn">
                  Select from Photo Library
                </button>
                <div className="camera-container"> </div>
                <div className="camera_icons">
                  <i className="fa fa-camera" />
                </div>
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

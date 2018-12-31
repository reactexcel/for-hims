import React, { Component } from "react";
import { Link } from "react-router-dom";

class Photos extends Component {
  render() {
    return (
      <>
        <div class="emr_header">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <h2 class="black"> Bailey Health of Pennsylvania P.C. </h2>
              </div>
              <div class="clearfix" />
              <ul class="tab_header questions_header_tab">
                <li class="active1">
                  <i class="fa fa-check-circle" />
                  <Link to="/informed-consent"> Informed Consent </Link>
                </li>
                <li class="active1">
                  <i class="fa fa-check-circle" />
                  <Link to="/questions"> Questions </Link>
                </li>
                <li class="active2">
                  <Link to="/photos"> Photos </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-2"> </div>
            <div class="col-xs-12 col-sm-12 col-md-8">
              <div class="photos_taken">
                <h2> Take a photo of your face</h2>
                <h4> This photo must have be taken in the last 30 days.</h4>
                <h4>
                  This photo must be clear with a good resolution for medical
                  purposes.
                </h4>
                <h4 class="grew">
                  You can drag and drop a valid photo to upload.
                </h4>
                <h5 class="grew">
                  Allowed photo types: jpeg, png. Max photo size: 10MB.
                </h5>
                <ul class="viewbox_section">
                  <li class="circle1"> 1 </li>
                  <li class="circle_line"> &nbsp; </li>
                  <li class="circle2"> 2 </li>
                </ul>
                <button tabindex="0" type="button" class="photo_btn">
                  Select from Photo Library
                </button>
                <div class="camera-container"> </div>
                <div class="camera_icons">
                  <i class="fa fa-camera" />
                </div>
              </div>
              <p align="center">
                Powered by Hims <br />
                <Link to="#" class="link">
                  Terms and Conditions
                </Link>
              </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-2"> </div>
          </div>
        </div>
      </>
    );
  }
}

export default Photos;

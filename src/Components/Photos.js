import React, { Component } from "react";
import { Link } from "react-router-dom";
import UploadPhoto from "./Generic/UploadPhoto";

class Photos extends Component {
  render() {
    const {
      photo: { isLoading, isSuccess, isError, message }
    } = this.props;
    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <div className="login-loader">
              <div>Uploaing your Photo...</div>
              <div>Hang tight</div>
              <div className="loader" />
            </div>
          </div>
        ) : (
          <>
            {" "}
            <div className="emr_header">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <h2 className="black">
                      {" "}
                      Bailey Health of Pennsylvania P.C.{" "}
                    </h2>
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
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="photos_taken">
                    {(isSuccess || isError) && message ? (
                      <h2 className="grew">{message}</h2>
                    ) : (
                      <>
                        <h2> Take a photo of your face</h2>
                        <h4>
                          This photo must have be taken in the last 30 days.
                        </h4>
                        <h4>
                          This photo must be clear with a good resolution for
                          medical purposes.
                        </h4>
                        <h5 className="grew">
                          Allowed photo types: jpeg, png. Max photo size: 10MB.
                        </h5>
                        <ul className="viewbox_section">
                          <li className="circle1"> 1 </li>
                          <li className="circle_line"> &nbsp; </li>
                          <li className="circle2"> 2 </li>
                        </ul>
                        <UploadPhoto onUpload={this.props.onUploadPhoto} />
                      </>
                    )}
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 text-center mb-5"> 
                  <Link to="/" className="btn btn-default link go_homepage mb-5">
                          BACK TO HOME
                      </Link>
                  </div>
                  <p align="center">
                    <Link to="#" className="link">
                      Terms and Conditions
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Photos;

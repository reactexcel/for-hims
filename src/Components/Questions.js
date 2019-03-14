import React, { Component } from "react";
import { Link } from "react-router-dom";

/**UI component for Questions Answer section */
class Questions extends Component {
  render() {
    const { isLoading } = this.props.questions;
    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <div className="login-loader">
              <div>Saving your questions...</div>
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
                      Bailey Health of Pennsylvania P.C.
                    </h2>
                  </div>
                  <div className="clearfix" />

                  <ul className="tab_header questions_header_tab">
                    <li className="active1">
                      <i className="fa fa-check-circle" />
                      <Link to="/informed-consent"> Informed Consent </Link>
                    </li>
                    <li className="active2">
                      <Link to="/questions"> Questions </Link>
                    </li>
                    <li>
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
                  <div className="question-detail">
                    {this.props.renderQuestions()}
                    <p align="center">
                      <Link to="/photos" className="consent_next_btn">
                        Continue
                      </Link>
                    </p>
                    <p align="center">
                      <button
                        onClick={this.props.submitAnswers}
                        className="next-question_btn"
                      >
                        Submit Answers
                      </button>
                    </p>
                  </div>
                  <h1>&nbsp; </h1>
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
            <div className="scrollup" to="#">
              <i className="fa fa-angle-double-up" aria-hidden="true" />
            </div>
          </>
        )}
      </>
    );
  }
}

export default Questions;

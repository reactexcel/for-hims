import React, { Component } from "react";
import { Link } from "react-router-dom";

class BackToInbox extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="action_required_section">
              <Link to="/reply" className="new-massage_btn">
                New Massage
              </Link>
              <div className="messages_new_box">
                <i className="fa fa-envelope-o" />
                <h4>
                  <Link to="/action-required" className="black">
                    Your ID photo didn't meet our criteria. Please take a
                    picture of a government issued license that has your
                    picture.
                  </Link>
                </h4>
                <h5 className="grew">May 28, 2018 11:08 AM</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BackToInbox;

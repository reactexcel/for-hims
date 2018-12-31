import React, { Component } from "react";
import { Link } from "react-router-dom";

class BackToInbox extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="action_required_section">
              <Link to="/reply" class="new-massage_btn">
                New Massage
              </Link>
              <div class="messages_new_box">
                <i class="fa fa-envelope-o" />
                <h4>
                  <Link to="/action-required" class="black">
                    Your ID photo didn't meet our criteria. Please take a
                    picture of a government issued license that has your
                    picture.
                  </Link>
                </h4>
                <h5 class="grew">May 28, 2018 11:08 AM</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BackToInbox;

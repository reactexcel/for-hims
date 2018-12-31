import React, { Component } from "react";
import { Link } from "react-router-dom";

class MessageYourDoctor extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-1"> </div>
          <div class="col-xs-12 col-sm-12 col-md-10">
            <div class="message_create_close">
              <h4>Message</h4>
              <form>
                <textarea name="body" placeholder="Enter you message here..." />
              </form>
              <Link to="#" class="read">
                Submit Message
              </Link>
              &nbsp;
              <Link to="/action-required" class="black">
                Cancel
              </Link>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-1"> </div>
        </div>
      </div>
    );
  }
}

export default MessageYourDoctor;

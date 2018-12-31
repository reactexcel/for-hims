import React, { Component } from "react";
import { Link } from "react-router-dom";

class MessageYourDoctor extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-1"> </div>
          <div className="col-xs-12 col-sm-12 col-md-10">
            <div className="message_create_close">
              <h4>Message</h4>
              <form>
                <textarea name="body" placeholder="Enter you message here..." />
              </form>
              <Link to="#" className="read">
                Submit Message
              </Link>
              &nbsp;
              <Link to="/action-required" className="black">
                Cancel
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-1"> </div>
        </div>
      </div>
    );
  }
}

export default MessageYourDoctor;

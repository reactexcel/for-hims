import React, { Component } from "react";
import { Link } from "react-router-dom";
class Reply extends Component {
  render() {
    return (
      <div className="container">
        <div class="row">
          <div className="col-xs-12 col-sm-12 col-md-2" />
          <div className="col-xs-12 col-sm-12 col-md-8">
            <div className="reply_section">
              <Link to="/action-required" className="messages_support">
                <h4>Contact Support</h4>For all order and account related
                questions, contact our support team.
              </Link>
              <Link to="/message-your-doctor" className="messages_doctor">
                <h4>Message your doctor</h4>For all medical related inquiries.
              </Link>
              <Link to="/action-required" className="read">
                Back to Inbox
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2" />
        </div>
      </div>
    );
  }
}

export default Reply;

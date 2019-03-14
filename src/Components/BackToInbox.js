import React, { Component } from "react";
import { Link } from "react-router-dom";

/**UI component for Back to Inbox */
class BackToInbox extends Component {
  render() {
    const { message, onOpenMessageModal } = this.props;
    const { data } = message;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="action_required_section">
              <Link
                to="#"
                className="new-massage_btn"
                onClick={onOpenMessageModal}
              >
                New Message
              </Link>
              {data.map(message => (
                <div className="messages_new_box" key={message.id}>
                  <i className="fa fa-envelope-o" />
                  <h4>
                    <Link to="/action-required" className="black">
                      {message.data().message}
                    </Link>
                  </h4>
                  <h5 className="grew">
                    {new Date(message.data().timestamp.seconds * 1000)
                      .toUTCString()
                      .slice(4, -4)}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BackToInbox;

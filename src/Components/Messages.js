import React, { Component } from "react";
import { Link } from "react-router-dom";

class Messages extends Component {
  render() {
    return (
      <>
        <div className="orders_section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="orders_box">
                  <h3>Inbox</h3>
                  <h4 className="grew"> You do not have any messages</h4>
                  <Link to="#" className="read">
                    New Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </>
    );
  }
}

export default Messages;

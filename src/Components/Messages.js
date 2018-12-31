import React, { Component } from "react";
import { Link } from "react-router-dom";

class Messages extends Component {
  render() {
    return (
      <>
        <div class="orders_section">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="orders_box">
                  <h3>Inbox</h3>
                  <h4 class="grew"> You do not have any messages</h4>
                  <Link to="#" class="read">
                    New Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix" />
      </>
    );
  }
}

export default Messages;

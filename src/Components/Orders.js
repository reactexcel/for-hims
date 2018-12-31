import React, { Component } from "react";
import { Link } from "react-router-dom";

class Orders extends Component {
  render() {
    return (
      <>
        <div class="orders_section">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="orders_box">
                  <h3>You don't have any orders yet!</h3>
                  <Link to="#" class="read">
                    Go to store
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

export default Orders;

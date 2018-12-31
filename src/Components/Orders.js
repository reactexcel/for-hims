import React, { Component } from "react";
import { Link } from "react-router-dom";

class Orders extends Component {
  render() {
    return (
      <>
        <div className="orders_section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="orders_box">
                  <h3>You don't have any orders yet!</h3>
                  <Link to="#" className="read">
                    Go to store
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

export default Orders;

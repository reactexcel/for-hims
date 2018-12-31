import React, { Component } from "react";

class MyOrders extends Component {
  render() {
    return (
      <>
        <div className="orders_section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="my-orders-section">
                  <h3 align="center"> My Orders</h3>
                  <button className="collapsible">
                    <ul className="tab_order">
                      <li className="orders1">
                        <span className="small_title"> Order No. </span>
                        <span>W1HQD3CC</span>
                      </li>
                      <li className="orders2">
                        <span className="small_title">Status</span>
                        <span className="link"> Outstanding medical visit </span>
                      </li>
                      <li className="orders3">
                        <span className="small_title">Tracking Number</span>
                        <span>-</span>
                      </li>
                      <li className="orders4">
                        <i className="fa fa-angle-right" />
                        <i className="fa fa-angle-up" />
                      </li>
                    </ul>
                  </button>

                  <div className="content">
                    <ul className="open_tab_order">
                      <li className="add1">
                        <span className="small_title">Amount</span> $35.00 <br />
                        <br />
                        <span>
                          <span className="small_title">Shipping Address</span> 1031
                          n 3rd st., 101 <br /> philadelphia, PA <br /> 19123
                          <br /> USA
                        </span>
                      </li>
                      <li className="add2"> Sildenafil x1 </li>
                    </ul>
                  </div>

                  <button className="collapsible">
                    <ul className="tab_order">
                      <li className="orders1">
                        <span className="small_title"> Order No. </span>
                        <span>8PgeWmxo</span>
                      </li>
                      <li className="orders2">
                        <span className="small_title">Status</span>
                        <span className="link"> Outstanding medical visit </span>
                      </li>
                      <li className="orders3">
                        <span className="small_title">Tracking Number</span>
                        <span>-</span>
                      </li>
                      <li className="orders4">
                        <i className="fa fa-angle-right" />
                        <i className="fa fa-angle-up" />
                      </li>
                    </ul>
                  </button>

                  <div className="content">
                    <ul className="open_tab_order">
                      <li className="add1">
                        <span className="small_title">Amount</span> $25.00 <br />
                        <br />
                        <span>
                          <span className="small_title">Shipping Address</span> 1031
                          n 3rd st., 101 <br /> philadelphia, PA <br /> 19123
                          <br /> USA
                        </span>
                      </li>
                      <li className="add2"> Sildenafil x1 </li>
                    </ul>
                  </div>
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

export default MyOrders;

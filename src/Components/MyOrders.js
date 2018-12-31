import React, { Component } from "react";

class MyOrders extends Component {
  render() {
    return (
      <>
        <div class="orders_section">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="my-orders-section">
                  <h3 align="center"> My Orders</h3>
                  <button class="collapsible">
                    <ul class="tab_order">
                      <li class="orders1">
                        <span class="small_title"> Order No. </span>
                        <span>W1HQD3CC</span>
                      </li>
                      <li class="orders2">
                        <span class="small_title">Status</span>
                        <span class="link"> Outstanding medical visit </span>
                      </li>
                      <li class="orders3">
                        <span class="small_title">Tracking Number</span>
                        <span>-</span>
                      </li>
                      <li class="orders4">
                        <i class="fa fa-angle-right" />
                        <i class="fa fa-angle-up" />
                      </li>
                    </ul>
                  </button>

                  <div class="content">
                    <ul class="open_tab_order">
                      <li class="add1">
                        <span class="small_title">Amount</span> $35.00 <br />
                        <br />
                        <span>
                          <span class="small_title">Shipping Address</span> 1031
                          n 3rd st., 101 <br /> philadelphia, PA <br /> 19123
                          <br /> USA
                        </span>
                      </li>
                      <li class="add2"> Sildenafil x1 </li>
                    </ul>
                  </div>

                  <button class="collapsible">
                    <ul class="tab_order">
                      <li class="orders1">
                        <span class="small_title"> Order No. </span>
                        <span>8PgeWmxo</span>
                      </li>
                      <li class="orders2">
                        <span class="small_title">Status</span>
                        <span class="link"> Outstanding medical visit </span>
                      </li>
                      <li class="orders3">
                        <span class="small_title">Tracking Number</span>
                        <span>-</span>
                      </li>
                      <li class="orders4">
                        <i class="fa fa-angle-right" />
                        <i class="fa fa-angle-up" />
                      </li>
                    </ul>
                  </button>

                  <div class="content">
                    <ul class="open_tab_order">
                      <li class="add1">
                        <span class="small_title">Amount</span> $25.00 <br />
                        <br />
                        <span>
                          <span class="small_title">Shipping Address</span> 1031
                          n 3rd st., 101 <br /> philadelphia, PA <br /> 19123
                          <br /> USA
                        </span>
                      </li>
                      <li class="add2"> Sildenafil x1 </li>
                    </ul>
                  </div>
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

export default MyOrders;

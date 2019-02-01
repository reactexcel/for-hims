import React, { Component } from "react";
import Collapsible from "react-collapsible";
class MyOrders extends Component {
  render() {
    const { orders } = this.props;
    return (
      <>
        <div className="orders_section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="my-orders-section">
                  <h3 align="center"> My Orders</h3>
                  {orders.map(order => (
                    <Collapsible
                      key={order.id}
                      trigger={
                        <button type="button">
                          <ul className="tab_order">
                            <li className="orders1">
                              <span className="small_title"> Order No. </span>
                              <span>{order.id}</span>
                            </li>
                            <li className="orders2">
                              <span className="small_title">Status</span>
                              <span className="link">
                                {order.data().status}
                              </span>
                            </li>
                            <li className="orders3">
                              <span className="small_title">
                                Tracking Number
                              </span>
                              <span>-</span>
                            </li>
                            <li className="orders4">
                              <i className="fa fa-angle-right" />
                              {/* <i className="fa fa-angle-up" /> */}
                            </li>
                          </ul>
                        </button>
                      }
                    >
                      <div className="content">
                        <ul className="open_tab_order">
                          <li className="add1">
                            <span className="small_title">Amount</span>
                            {order.data().amount}$
                            <br />
                            <br />
                            <span>
                              <span className="small_title">
                                Shipping Address
                              </span>
                              {order.data().shippingAddress.street} <br />
                              {order.data().shippingAddress.states} <br />{" "}
                              {order.data().shippingAddress.zipcode}
                              <br /> USA
                            </span>
                          </li>
                          <li className="add2"> Sildenafil x1 </li>
                        </ul>
                      </div>
                    </Collapsible>
                  ))}
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

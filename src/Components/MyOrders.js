import React, { Component } from "react";
import Collapsible from "react-collapsible";
class MyOrders extends Component {
  render() {
    const { orders } = this.props;
    console.log(orders, "asdsad");
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
                            {order.data().amount / 1000}$
                            <br />
                            <br />
                            <span>
                              <span className="small_title">
                                Shipping Address
                              </span>
                              {order.data().shipping.address.line1} <br />
                              {order.data().shipping.address.state} <br />{" "}
                              {order.data().shipping.address.postal_code}
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

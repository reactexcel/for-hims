import React, { Component } from "react";
import Collapsible from "react-collapsible";
import * as ROLES from "../constants/roles";
/**UI component for rendering User's Orders */
class MyOrders extends Component {
  /**Used for rendering a title according to user role
   * @returns {string} title
   */
  renderTitle = () => {
    const { role } = this.props;
    let title;
    switch (role) {
      case ROLES.CUSTOMER:
        title = "My Orders";
        break;
      case ROLES.ADMIN:
        title = "All Orders";
        break;
      case ROLES.DOCTOR:
        title = "Customer's Orders";
      default:
        break;
    }
    return title;
  };
  /**To call getCustomerDetails on the basis of user roles */
  getCustomerDetails = e => {
    const { role } = this.props;    
    if (role !== ROLES.CUSTOMER) {
      this.props.getCustomerDetails(e);
    }
  };

  render() {
    const { orders, role } = this.props;
    return (
      <>
        <div className="orders_section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="my-orders-section">
                  <h3 align="center"> {this.renderTitle()}</h3>
                  {orders.map(order => (
                    
                    <Collapsible
                    key={order.id}
                    trigger={
                      <button
                      type="button"
                      onClick={this.getCustomerDetails}
                      data-userid={order.data().userId}
                      data-orderid={order.id}
                      data-cardid={order.data().cardId}
                      data-doctor={order.data().doctorName}
                      >
                          <ul className="tab_order">
                            <li className="orders1">
                              <span className="small_title"> Order No. </span>
                              <span>{order.id}</span>
                            </li>
                            <li className="orders2">
                              <span className="small_title">Status</span>
                              <span className="link">
                                {order.data().metadata.approvalStatus}
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
                              {role !== ROLES.CUSTOMER && (
                                <>
                                  <span className="small_title">
                                    Customer's Name:
                                  </span>
                                  {order.data().shipping.name}
                                </>
                              )}
                              <span className="small_title">
                                Shipping Address
                              </span>
                              {order.data().shipping.address.line1} <br />
                              {order.data().shipping.address.state} <br />{" "}
                              {order.data().shipping.address.postal_code}
                              <br /> USA
                            </span>
                          </li>
                          {order
                            .data()
                            .items.slice(0, -2)
                            .map((item, index) => (
                              <li
                                key={item.description + index}
                                className="add2"
                              >
                                {`${item.description} X${item.quantity}`}{" "}
                              </li>
                            ))}
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

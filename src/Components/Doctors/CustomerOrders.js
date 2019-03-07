import React, { Component } from "react";
/**UI component for Customer Orders where Doctor will review the customer
 * information
 */
export default class CustomerOrders extends Component {
  render() {
      console.log(this.props.customerDetails,'zxcxzzxc')
    return <div >{this.props.customerDetails.isLoading}</div>;
  }
}

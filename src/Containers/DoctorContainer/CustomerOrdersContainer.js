import React, { Component } from "react";
import CustomerOrders from "../../Components/Doctors/CustomerOrders";
import { connect } from "react-redux";
import requireDoctor from "../../hoc/requireDoctor";
/**Parent Component for CustomerOrders */
class CustomerOrdersContainer extends Component {
  render() {
      console.log(this.props)
    return <CustomerOrders customerDetails={this.props.customerDetails} />;
  }
}
const mapStateToProps = ({ customerDetails }) => ({ customerDetails });
export default requireDoctor(connect(mapStateToProps)(CustomerOrdersContainer));

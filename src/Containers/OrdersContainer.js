import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import Orders from "../Components/Orders";
import MyOrders from "../Components/MyOrders";
import { getAllOrdersRequest, getCustomerDetailRequest } from "../actions";
import { connect } from "react-redux";

/**Parent Component for Orders UI */
class OrdersContainer extends Component {
  componentDidMount() {
    const {
      uid,
      userProfile: {
        data: { role }
      }
    } = this.props;
    this.props.getAllOrdersRequest({ uid, role });
  }
  componentDidUpdate(prevProps) {
    const {
      uid,
      userProfile: {
        data: { role }
      }
    } = this.props;
    if (prevProps.userProfile.data.role !== this.props.userProfile.data.role) {
      this.props.getAllOrdersRequest({ uid, role });
    }
  }
  getCustomerDetails(e) {
    console.log(e.currentTarget.dataset.uid, "asdasd");
  }
  render() {
    const { data, isLoading } = this.props.orders;
    const {
      data: { role }
    } = this.props.userProfile;
    return (
      <div>
        <Header />
        {isLoading ? (
          <div className="loader-container">
            <div className="login-loader">
              <div>Loading your orders...</div>
              <div>Hang tight</div>
            </div>
          </div>
        ) : data.length ? (
          <MyOrders
            role={role}
            orders={data}
            getCustomerDetails={this.getCustomerDetails}
          />
        ) : (
          <Orders />
        )}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = ({ orders, profile: { userProfile } }) => ({
  orders,
  userProfile
});
export default connect(
  mapStateToProps,
  { getAllOrdersRequest, getCustomerDetailRequest }
)(OrdersContainer);

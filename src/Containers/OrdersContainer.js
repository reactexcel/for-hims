import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import Orders from "../Components/Orders";
import MyOrders from "../Components/MyOrders";
import { getAllOrdersRequest } from "../actions";
import { connect } from "react-redux";

class OrdersContainer extends Component {
  componentDidMount() {
    const { uid } = this.props;
    this.props.getAllOrdersRequest({ uid });
  }
  componentDidUpdate(prevProps) {
    const { uid } = this.props;
    if (prevProps.uid !== this.props.uid) {
      this.props.getAllOrdersRequest({ uid });
    }
  }
  render() {
    const { data } = this.props.orders;
    return (
      <div>
        <Header />
        {data.length ? <MyOrders orders={data} /> : <Orders />}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = ({ orders }) => ({ orders });
export default connect(
  mapStateToProps,
  { getAllOrdersRequest }
)(OrdersContainer);

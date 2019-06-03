import React, { Component } from "react";
import "../assets/css/ordertable.scss";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import { getAllOrdersRequest, getCustomerDetailRequest } from "../actions";
import { connect } from "react-redux";
import OrderTableList from "../Components/OrderTableList";
import { CSVLink, CSVDownload } from "react-csv";
import Orders from "../Components/Orders";
import moment from "moment";
const csvData = [
  ["Order No.", "Doctor Name", "Doctor Email", "Status", "Amount", "Order Date"]
];

class OrdersTableContainers extends Component {
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
          <div className="order-table-container">
            <h3>All Orders in Table </h3>
            <CSVLink data={csvData} className="csv-data">Download CSV File</CSVLink>
            <table className="table table-bordered table-striped order-table">
              <thead>
                <tr>
                  <th>Order No.</th>
                  <th>Doctor Name</th>
                  <th>Doctor Email</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Order Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map(element => {
                  csvData.push([
                    element.data().id,
                    element.data().doctorName,
                    element.data().email,
                    element.data().metadata.approvalStatus,
                    element.data().amount,
                    moment(element.data().created * 1000).format("LL")
                  ]);
                  return (
                    <OrderTableList
                      listData={element.data()}
                      key={element.data().id}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <Orders />
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({
  orders,
  profile: { userProfile },
  customerDetails
}) => ({
  orders,
  userProfile,
  customerDetails
});
export default connect(
  mapStateToProps,
  { getAllOrdersRequest, getCustomerDetailRequest }
)(OrdersTableContainers);

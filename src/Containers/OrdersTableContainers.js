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
import OrderTableDropDown from "../Components/OrderTableDropDown"
import {usaStates} from "../constants/profile"
import isEqual from "lodash/isEqual"
const csvData = [
  ["Order No.", "Doctor Name", "Doctor Email", "Status", "Amount", "Order Date"]
];

class OrdersTableContainers extends Component {
  state={stateFilteredUser:[]}
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
      },
      orders:{data}
    } = this.props;
    if (prevProps.userProfile.data.role !== this.props.userProfile.data.role) {
      this.props.getAllOrdersRequest({ uid, role });
    }
    if(!isEqual(prevProps.orders.data,this.props.orders.data)){
      this.setState({
        stateFilteredUser: data
      })
    }
  }
  handleParent=(state)=>{        
    const {data}=this.props.orders
    let filteredData=data.filter((user)=>user.data().shipping.address.state === state)    
    this.setState({stateFilteredUser:filteredData})
  }
  render() {    
    const { isLoading ,data} = this.props.orders;
    let stateList=this.state.stateFilteredUser
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
          <div className="order-table-container table-responsive">
            <h3>All Orders in Table </h3>
            <div className="dropdown-csv">
            <OrderTableDropDown usaStates={usaStates} handleParent={this.handleParent}/>
            <CSVLink data={csvData} className="csv-data">Download CSV File</CSVLink>
            </div>
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
                {stateList.map(element => {
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

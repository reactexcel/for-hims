import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import {
  emailSendDoctorRequest,
} from "../actions";

const email=(props)=>
  `<div>
       <div style="font-size:14px font-weight:'bold', margin-bottom:20px">
            You have a new order to review!
       </div> 
       <div style ="font-size:14px,margin-bottom:10px">Profile</div>
       <div>${props.user.data.email}</div>
       <div>${new Date(props.userProfile.data.dateOfBirth.seconds *1000)}</div>
       <div style="font-size:14px">Order No.</div>
       <div>${props.orders.orderDetail.order.id}</div>
       <div>Status</div>
       <div>${props.orders.orderDetail.order.metadata.approvalStatus}</div>
       <div>Review now <div>
</div>`

/**UI component for Gender */
class Gender extends Component {
  componentDidMount(){
    console.log(this.props.orders && this.props.orders.orderDetail,'@@@@@@@@@@@@@')

    if(this.props.orders && this.props.orders.orderDetail ) {
    const order_id = this.props.orders.orderDetail.order.id;
    const user_mail = this.props.user.data.email;
    const  birthdate = new Date(this.props.userProfile.data.dateOfBirth.seconds *1000);
    // const birthdate = this.props.userProfile.data.dateOfBirth;
    const status = this.props.orders.orderDetail.order.metadata.approvalStatus;
    // const email_data ={order:}
    const x = email(this.props)
    const data ={
                  order_no:order_id,
                  to:"admin@noleuderm.com",
                  birth:birthdate,
                  order_status:status,
                  message:x
                }
      this.props.emailSendDoctorRequest(data);
    }
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-1"> </div>
          <div className="col-xs-12 col-sm-12 col-md-10">
            <div className="gender-container">
              <h2> What is your gender?</h2>
              <div className="clearfix" />
              <div className="male_box">
                <input
                  id="tab1"
                  type="radio"
                  name="tabs"
                  value="male"
                  checked={"male" === this.props.gender}
                  onChange={this.props.onGenderChange}
                />
                <label for="tab1" className="man-silhouette">
                  Male
                </label>
                <input
                  id="tab2"
                  type="radio"
                  name="tabs"
                  value="female"
                  checked={"female" === this.props.gender}
                  onChange={this.props.onGenderChange}
                />
                <label for="tab2" className="woman-silhouette">
                  Female
                </label>
              </div>
              <div className="clearfix" />
              <div className="back-btn">
                <Link to="/">Close Visit</Link>
              </div>
              <div className="confirm-gender" onClick={this.props.saveGender}>
                Confirm
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-1"> </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ user, profile: { userProfile }, payment,orders }) => ({
  user,
  userProfile,
  payment,
  orders
}); 

export default connect(
  mapStateToProps,
  {emailSendDoctorRequest}
)(Gender);


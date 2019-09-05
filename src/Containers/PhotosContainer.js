import React, { Component } from "react";
import Photos from "../Components/Photos";
import { connect } from "react-redux";
import { uploadPhotoRequest } from "../actions";
import * as emailTemplate from "../utils/messageTemplate";
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

class PhotosContainer extends Component {
  componentDidUpdate(prevProps) {
    if(this.props.orders && this.props.orders.orderDetail && this.props.orders.orderDetail.order && this.props.photo.isSuccess && this.props.photo.isSuccess !== prevProps.photo.isSuccess  ) {
      const order_id = this.props.orders.orderDetail.order.id;
      const user_mail = this.props.user.data.email;
      const {areaDoctor}=this.props.orders
      const  birthdate = new Date(this.props.userProfile.data.dateOfBirth.seconds *1000);
      const status = this.props.orders.orderDetail.order.metadata.approvalStatus;
      const x = email(this.props)
      const data ={
                    order_id,
                    email:user_mail,
                    DOB:birthdate,
                    status:status,
                  }
        //send email to admin on order placed
      var message= emailTemplate.messageTemplate({sendTo:emailTemplate.ORDER_PLACED_ADMIN,...data})
        this.props.emailSendDoctorRequest({to:"admin@noleuderm.com",message});
        //send email to areea doctor on order placed
        message= emailTemplate.messageTemplate({sendTo:emailTemplate.ORDER_PLACED_DOCTOR,...data})
        this.props.emailSendDoctorRequest({to:areaDoctor.email,message});
        //send email to user on order placed
        message= emailTemplate.messageTemplate({sendTo:emailTemplate.ORDER_PLACED_PATIENT,...data})
        this.props.emailSendDoctorRequest({to:user_mail,message});

    }

  }
  onUploadPhoto = file => {
    this.props.uploadPhotoRequest({ file });
  };
  render() {
    return (
      <div>
        <Photos photo={this.props.photo} onUploadPhoto={this.onUploadPhoto} />
      </div>
    );
  }
}
const mapStateToProps = ({ user, profile: { userProfile }, payment,orders, photo }) => ({
  user,
  userProfile,
  payment,
  orders,
  photo  
});
export default connect(
  mapStateToProps,
  { uploadPhotoRequest, emailSendDoctorRequest }
)(PhotosContainer);

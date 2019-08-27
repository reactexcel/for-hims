import moment from "moment"
export const ORDER_PLACED_ADMIN = "orderPlacedAdmin";

export const ORDER_APPROVED_ADMIN = "orderApprovedAdmin";
export const ORDER_REJECTED_ADMIN = "orderRejectedAdmin";
export const ORDER_PLACED_PATIENT = "orderPlacedAdminPatient";
export const ORDER_APPROVED_PATIENT = "orderApprovedPatient";
export const ORDER_REJECTED_PATIENT = "orderRejectedPatient";
export const ORDER_PLACED_DOCTOR = "orderPlacedDoctor";

export function messageTemplate(props) {

  switch (props.sendTo) {
    case ORDER_PLACED_ADMIN:
      return `<div>
      <h2>New Order is placed and send for Doctor Approval</h2> 
      <h4>Profile</h4>
      <div>${props.email}</div>
      <h4 >User Birth Date:</h4> 
      <div>${moment(props.DOB).format('DDD MM YYYY')}</div>
      <h4>Order No.</h4>
      <div> ${props.order_id}</div>
      <h4>Status:</h4>
      <div>${props.status}</div>
</div>`;;
    case ORDER_APPROVED_ADMIN:
      return `<div>
        <div style="font-size:14px font-weight:'bold', margin-bottom:20px">Order is Approved</div> 
        <div style ="font-size:14px,margin-bottom:10px">Profile</div>
        <div>${props.email}</div>
        <h4 >User Birth Date:</h4> 
        <div>${moment(props.DOB).format('DDD MM YYYY')}</div>
        <h4 style="font-size:14px">Order No.</h4>
        <div>${props.order_id}</div>
        <h4>Status</h4>
        <div>Order Status:${props.status}</div>
 </div>`;
    case ORDER_REJECTED_ADMIN:
      return `<div>
          <h2>Order is Rejected</h2> 
          <h4>Profile</h4>
          <div>${props.email}</div>
          <h4 >User Birth Date:</h4> 
          <div>${moment(props.DOB).format('DDD MM YYYY')}</div>
          <h4>Order No.:</h4>
          <div>${props.order_id}</div>
          <h4>Status:</h4>
          <div>${props.status}</div>
   </div>`;
    case ORDER_PLACED_PATIENT:
    return`<div>
    <h2 >Your order is in Review!</h2> 
    <h4>Your order has been placed and your prescription for the Noluederm Kit is currently in review.</h4>
    <h4>You will be notified within 72 hours once your prescription review is complete.</h4>
    <h4>Profile</h4> 
    <div >User Email:</div>
    <div>${props.email}</div> 
    <div >User Birth Date:</div>
    <div>${moment(props.DOB).format('DDD MM YYYY')}</div>
    <h4>Order No.</h4> 
    <div >${props.order_id}</div> 
    <h4>Status</h4> 
    <div>${props.status}</div>
</div>`;
    case ORDER_APPROVED_PATIENT:
      return`<div>
      <h2 >Your order has been Approved!</h2> 
      <h4>You have successfully received a prescription for the Noleuderm Kit.</h4>
      <h4>Your order had been processed for shipping. You can review your order status by signing into
      your account.</h4>
      <h4 >Profile</h4> 
      <div >User Email:</div> 
      <div>${props.email}</div>
      <div >User Birth Date:</div>
      <div>${moment(props.DOB).format('DDD MM YYYY')}</div>
      <h4>Order No.</h4> 
      <div >${props.order_id}</div> 
      <h4>Status</h4> 
      <div>${props.status}</div>
  </div>`;
    case ORDER_REJECTED_PATIENT:
      return `<div>
    <h2 style="font-size:18px font-weight:'bold', margin-bottom:20px">Your order has been denied!</h2> 
    <h4>Based on your virtual doctor visit, your request for a Noluederm Kit prescription was denied.</h4>
    <h4>You will automatically be refunded for your order.</h4>
    <h4 >Profile</h4> 
    <h4 >User Email:</h4> 
    <div>${props.email}</div>
    <div >User Birth Date:</div> 
    <div>${moment(props.DOB).format('DDD MM YYYY')}</div>
    <h4 >Order No.</h4> 
    <div >${props.order_id}</div> 
    <h4>Status</h4> 
    <div>${props.status}</div>
</div>`;
    case ORDER_PLACED_DOCTOR:
    return `<div>
    <h2>You have a new order to Review!</h2> 
    <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Profile</div> 
    <h4 >User Email:</h4> 
    <div>${props.email}</div>
    <h4 >User Birth Date:</h4> 
    <div>${moment(props.DOB).format('DDD MM YYYY')}</div>
    <h4>Order No.</h4> 
    <div >${props.order_id}</div> 
    <h4>Status</h4> 
    <div>${props.status}</div>
    <div>`
    default:
    // code block
  }
}

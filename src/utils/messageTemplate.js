export const ORDER_PLACED_ADMIN = "orderPlacedAdmin";
export const ORDER_APPROVED_ADMIN = "orderApprovedAdmin";
export const ORDER_REJECTED_ADMIN = "orderRejectedAdmin";
export const ORDER_PLACED_PATIENT = "orderPlacedAdminPatient";
export const ORDER_APPROVED_PATIENT = "orderApprovedPatient";
export const ORDER_REJECTED_PATIENT = "orderRejectedPatient";
export const ORDER_PLACED_DOCTOR = "orderPlacedDoctor";

export function messageTemplate(props) {
  console.log(props, "kkkkkkkkkkkkkkkk");

  switch (props.sendTo) {
    case ORDER_PLACED_ADMIN:
      return "";
    case ORDER_APPROVED_ADMIN:
      return `<div>
        <div style="font-size:14px font-weight:'bold', margin-bottom:20px">Order is Approved</div> 
        <div style ="font-size:14px,margin-bottom:10px">Profile</div>
        <div>${props.email}</div>
        <div style="font-size:14px">Order No.:${props.order_id}</div>
        <div>Status</div>
        <div>Order Status:${props.status}</div>
 </div>`;
    case ORDER_REJECTED_ADMIN:
      return `<div>
          <div style="font-size:14px font-weight:'bold', margin-bottom:20px">Order is Rejected</div> 
          <div style ="font-size:14px,margin-bottom:10px">Profile</div>
          <div>${props.email}</div>
          <div>Order No.:${props.order_id}</div>
          <div>Status:${props.status}</div>
   </div>`;
    case ORDER_PLACED_PATIENT:
    return`<div>
    <div style="font-size:18px font-weight:'bold', margin-bottom:20px">Your order is in Review!</div> 
    <div>Your order has been placed and your prescription for the Noluederm Kit is currently in review.</div>
    <div>You will be notified within 72 hours once your prescription review is complete.</div>
    <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Profile</div> 
    <div >User Email:</div>
    <div>${props.email}</div> 
    <div >User Birth Date:</div>
    <div>${props.DOB}</div>
    <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Order No.</div> 
    <div >${props.order_id}</div> 
    <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Status</div> 
    <div>${props.status}</div>
</div>`;
    case ORDER_APPROVED_PATIENT:
      return`<div>
      <div style="font-size:18px font-weight:'bold', margin-bottom:20px">Your order has been Approved!</div> 
      <div>You have successfully received a prescription for the Noleuderm Kit.</div>
      <div>Your order had been processed for shipping. You can review your order status by signing into
      your account.</div>
      <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Profile</div> 
      <div >User Email:</div> 
      <div>${props.email}</div>
      <div >User Birth Date:</div>
      <div>${props.DOB}</div>
      <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Order No.</div> 
      <div >${props.order_id}</div> 
      <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Status</div> 
      <div>${props.status}</div>
  </div>`;
    case ORDER_REJECTED_PATIENT:
      return `<div>
    <div style="font-size:18px font-weight:'bold', margin-bottom:20px">Your order has been denied!</div> 
    <div>Based on your virtual doctor visit, your request for a Noluederm Kit prescription was denied.</div>
    <div>You will automatically be refunded for your order.</div>
    <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Profile</div> 
    <div >User Email:</div> 
    <div>${props.email}</div>
    <div >User Birth Date:</div> 
    <div>${props.DOB}</div>
    <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Order No.</div> 
    <div >${props.order_id}</div> 
    <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Status</div> 
    <div>${props.status}</div>
</div>`;
    case ORDER_PLACED_DOCTOR:
    return `<div>
    <div style="font-size:18px font-weight:'bold', margin-bottom:20px">You have a new order to Review!</div> 
    <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Profile</div> 
    <div >User Email:</div> 
    <div>${props.email}</div>
    <div >User Birth Date:</div> 
    <div>${props.DOB}</div>
    <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Order No.</div> 
    <div >${props.order_id}</div> 
    <div style="font-size:16px font-weight:'bold', margin-bottom:20px">Status</div> 
    <div>${props.status}</div>
    <div>`
    default:
    // code block
  }
}

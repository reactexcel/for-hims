import moment from "moment";
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
      return `
      <div class="content">
      <div class="heading">
        <h1>New Order is placed and send for Doctor Approval</h1>
      </div>
      <div class="block">
        <div class="profile">
          <h2>Profile</h2>
          <p>${props.email}</p>
          <div>${moment(props.DOB).format("MM/DD/YYYY")}</div>
        </div>
        <div class="details">
          <h2>Order No.</h2>
          <div> ${props.order_id}</div>
          <h2>Status:</h2>
          <div class="status">${props.status}</div>
        </div>
      </div>
      <div class="btn-wrapper">
        <a class="btn1" href="https://noleuderm-d2b6a.firebaseapp.com" target="blank">REVIEW NOW</a>
      </div>
</div>`;
    case ORDER_APPROVED_ADMIN:
      return `
      <div class="content">
      <div class="heading">
        <h1>Order is Approved</h1>
      </div>
      <div class="block">
        <div class="profile"> 
          <div style ="font-size:14px,margin-bottom:10px">Profile</div>
          <p>${props.email}</p>
          <div>${moment(props.DOB).format("MM/DD/YYYY")}</div>
        </div>
        <div class="details">
          <h2>Order No.</h2>
          <div>${props.order_id}</div>
          <h2>Status</h2>
          <div class="status">Order Status:${props.status}</div>
        </div>
      </div>
      <div class="btn-wrapper">
        <a class="btn1" href="https://noleuderm-d2b6a.firebaseapp.com" target="blank">REVIEW NOW</a>
      </div>
 </div>`;
    case ORDER_REJECTED_ADMIN:
      return `
      <div class="content">
      <div class="heading">
        <h1>Order is Rejected</h1>
      </div> 
      <div class="block">
        <div class="profile">
          <h2>Profile</h2>
          <p>${props.email}</p>
          <div>${moment(props.DOB).format("MM/DD/YYYY")}</div>
        </div>
        <div class="details">
          <h2>Order No.:</h2>
          <div>${props.order_id}</div>
          <h2>Status:</h2>
          <div class="status">${props.status}</div>
        </div>
      </div>
      <div class="btn-wrapper">
        <a class="btn1" href="https://noleuderm-d2b6a.firebaseapp.com" target="blank">REVIEW NOW</a>
      </div>
      </div>`;
    case ORDER_PLACED_PATIENT:
      return `
      <div class="content">
      <div class="heading">
      <h1>Your order is in Review!</h1> 
      <div class="pb">Your order has been placed and your prescription for the Noluederm Kit is currently in review.</div>
      <div class="pb">You will be notified within 72 hours once your prescription review is complete.</div>
    </div>
    <div class="block">
      <div class="profile">
        <h2>Profile</h2>
        <p>${props.email}</p> 
        <div>${moment(props.DOB).format("MM/DD/YYYY")}</div>
      </div>
      <div class="details">
        <h2>Order No.</h2> 
        <div >${props.order_id}</div> 
        <h2>Status</h2> 
        <div class="status">${props.status}</div>
      </div>
    </div>
    <div class="btn-wrapper">
      <a class="btn1" href="https://noleuderm-d2b6a.firebaseapp.com" target="blank">REVIEW YOUR ORDER</a>
    </div>
      </div>`;
    case ORDER_APPROVED_PATIENT:
      return `
      <div class="content">
        <div class="heading">
          <h1 >Your order has been Approved!</h1> 
          <div class="pb">You have successfully received a prescription for the Noleuderm Kit.</div>
          <div class="pb">Your order had been processed for shipping. You can review your order status by signing into
          your account.</div>
        </div>
        <div class="block">
          <div class="profile">
            <h2>Profile</h2> 
            <p>${props.email}</p>
            <div>${moment(props.DOB).format("MM/DD/YYYY")}</div>
          </div>
          <div class="details">
            <h2>Order No.</h2> 
            <div >${props.order_id}</div> 
            <h2>Status</h2> 
            <div class="status">${props.status}</div>
          </div>
        </div>
        <div class="btn-wrapper">
          <a class="btn1" href="https://noleuderm-d2b6a.firebaseapp.com" target="blank">REVIEW YOUR ORDER</a>
        </div>
      </div>`;
    case ORDER_REJECTED_PATIENT:
      return `
      <div class="content">
      <div class="heading">
        <h1>Your order has been denied!</h1> 
        <div class="pb">Based on your virtual doctor visit, your request for a Noluederm Kit prescription was denied.</div>
        <div style="padding-bottom: 20px">You will automatically be refunded for your order.</div>
      </div>
    <div class="block">
      <div class="profile">
        <h2 >Profile</h2> 
        <p>${props.email}</p>
        <div>${moment(props.DOB).format("MM/DD/YYYY")}</div>
      </div>
      <div class="details">
        <h2>Order No.</h2> 
        <div >${props.order_id}</div> 
        <h2>Status</h2> 
        <div class="status">${props.status}</div>
      </div>
    </div>
    <div class="btn-wrapper">
      <a class="btn1" href="https://noleuderm-d2b6a.firebaseapp.com" target="blank">REVIEW YOUR ORDER</a>  
    </div>
      </div>`;
    case ORDER_PLACED_DOCTOR:
      return `
      <div class="content">
      <div class="heading">
        <h1>You have a new order to Review!</h1>
      </div>
      <div class="block">
        <div class="profile">
          <h2>Profile</h2> 
          <p>${props.email}</p>
          <div>${moment(props.DOB).format("MM/DD/YYYY")}</div>
        </div>
        <div class="details">
          <h2>Order No.</h2> 
          <div >${props.order_id}</div> 
          <h2>Status</h2> 
          <div class="status">${props.status}</div>
        </div>
      </div>
      <div class="btn-wrapper">
        <a class="btn1" href="https://noleuderm-d2b6a.firebaseapp.com" target="blank">REVIEW NOW</a>
      </div>
      </div>`;
    default:
    // code block
  }
}

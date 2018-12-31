import React, { Component } from "react";
import pro_img1 from "../../assets/images/pro_img1.png";

class ConfirmOrder extends Component {
  render() {
    return (
      <div>
        <div className="cart_section no-items">
          <div className="symbols">
            <div className="symbols-title">Payment</div>
            <ul>
              <li className="symbols1"> </li>
              <li className="symbols2"> </li>
              <li className="symbols3"> </li>
              <li className="symbols4 "> </li>
              <li className="symbols5 active"> </li>
            </ul>
          </div>
          <div className="cart_items ">
            <div className="cart-details_product">
              <div className="cart-details_product-image">
                {" "}
                <img src={pro_img1} />
              </div>
              <div className="cart-details_product-details">
                <h4> Complete Hair Kit </h4>
                <h4 className="description">
                  {" "}
                  Monthly subscription to save your hair{" "}
                </h4>
                <h4> $44.00 </h4>
                <div className="renewal-icon">
                  {" "}
                  <span className="glyphicon glyphicon-refresh" />{" "}
                </div>
                <div className="icon_close">
                  {" "}
                  <span className="glyphicon glyphicon-remove" />{" "}
                </div>
              </div>
            </div>{" "}
            <div className="clearfix" />
            <div className="cart_numbers">
              <ul>
                <li>
                  {" "}
                  Order Sub-total * <span> $34.00 </span>
                </li>
                <li>
                  {" "}
                  Membership <span> $10.00 </span>
                </li>
                <li>
                  {" "}
                  Medical Fee <span> $5.00 </span>
                </li>
                <li>
                  {" "}
                  Promo Discount <span> $0.00 </span>
                </li>
                <li className="total">
                  {" "}
                  Grand Total <span> $49.00 </span>
                </li>

                <li className="includes"> * Includes pharmacy & drug fees </li>
                <li className="shipping-add"> Shipping Address </li>
                <li>
                  {" "}
                  1031 n 3rd st., 101 <br /> philadelphia , PA <br /> 19123{" "}
                  <br /> USA{" "}
                </li>
                <li className="billing"> Billing Information </li>
                <li> Master Card •••• •••• •••• 2122 </li>

                <div className="checkout_recurring-charge">
                  Your membership renews automatically. You can cancel any time.
                </div>
              </ul>{" "}
            </div>
          </div>{" "}
        </div>{" "}
        <div className="clear" />{" "}
        <button tabindex="0" type="orange" className="absolute_no">
          Confirm & Start Visit
        </button>
      </div>
    );
  }
}

export default ConfirmOrder;

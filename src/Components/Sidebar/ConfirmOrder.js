import React, { Component } from "react";
import pro_img1 from "../../assets/images/pro_img1.png";
import { Link } from "react-router-dom";
class ConfirmOrder extends Component {
  static defaultProps = {
    renderNext: () => {}
  };
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.payment.data.cardList.length ===
      this.props.payment.data.cardList.length
    ) {
      return false;
    }
    return true;
  }
  render() {
    const {
      userProfile,
      payment: { data }
    } = this.props;
    return (
      <>
        <div className="cart_section no-items">
          <div className="symbols">
            <div className="symbols-title">Confirm Order</div>
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
                <img src={pro_img1} alt="" />
              </div>
              <div className="cart-details_product-details">
                <h4> Sildenafil </h4>
                <h4 className="description">
                  10 x 20 mg pills or as prescribed by the doctor. Billed
                  monthly
                </h4>
                <h4> $30.00 </h4>
                <div className="renewal-icon">
                  <span className="glyphicon glyphicon-refresh" />
                </div>
                <div className="icon_close">
                  <span className="glyphicon glyphicon-remove" />
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="cart_numbers">
              <ul>
                <li>
                  Order Sub-total * <span> $20.00 </span>
                </li>
                <li>
                  Membership <span> $10.00 </span>
                </li>
                <li>
                  Medical Fee <span> $5.00 </span>
                </li>
                <li>
                  Promo Discount <span> -$30.00 </span>
                </li>
                <li className="total">
                  Grand Total <span> $5.00 </span>
                </li>
                <li className="promo_code_btn">
                  You save $30.00 with this promo code!
                </li>

                <li className="includes"> * Includes pharmacy & drug fees </li>
                <li className="shipping-add"> Shipping Address </li>
                <li>
                  1031 n 3rd st., 101 <br /> philadelphia , PA <br /> 19123
                  <br /> USA
                </li>
                <li className="billing"> Billing Information </li>
                <li>
                  {data.cardList[0].brand}
                  •••• •••• •••• {data.cardList[0].last4}
                </li>

                <div className="checkout_recurring-charge">
                  Your membership renews automatically. You can cancel any time.
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="clear" />
        <button
          tabIndex="0"
          type="orange"
          className="absolute_no"
          // onClick={this.props.renderNext}
        >
          <Link to="/gender">Confirm & Start Visit</Link>
        </button>
      </>
    );
  }
}

export default ConfirmOrder;

import React, { Component } from "react";
import pro_img1 from "../../assets/images/pro_img1.png";

class Cart extends Component {
  static defaultProps = {
    renderNext: () => {}
  };
  render() {
    return (
      <>
        <div className="cart_section">
          <div className="symbols">
            <div className="symbols-title">Cart</div>
            <ul>
              <li className="symbols1 active"> </li>
              <li className="symbols2"> </li>
              <li className="symbols3 "> </li>
              <li className="symbols4"> </li>
              <li className="symbols5"> </li>
            </ul>
          </div>
          <div className="cart_items">
            {/* <div className="header-title">Cart</div> */}
            <div className="cart-details_product">
              <div className="cart-details_product-image">
                <img src={pro_img1} />
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
                  Order Sub-total <span> $20.00 </span>
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
              </ul>
            </div>
            <div className="checkout-coupon">
              <input type="text" name="coupon" placeholder="Promo Code" />
              <a href="#" className="btn_apply">
                Apply
              </a>
            </div>
          </div>
        </div>
        <button
          tabIndex="0"
          type="orange"
          className="next_btn"
          onClick={this.props.renderNext}
        >
          Next
        </button>
      </>
    );
  }
}

export default Cart;

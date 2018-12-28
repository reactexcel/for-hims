import React, { Component } from 'react';
import pro_img1 from '../../assets/images/pro_img1.png';

class Cart extends Component {
  render() {
    return (
			 <div>
 <div class="cart_section">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav1()"> <span class="glyphicon glyphicon-menu-right"></span> </a>
 
 <div class="cart_items">
 <div class="header-title">Cart</div>
	 <div class="cart-details_product">
	<div class="cart-details_product-image"> <img src={pro_img1}/></div>
	<div class="cart-details_product-details">  
	<h4> Sildenafil </h4>
	<h4 class="description"> 10 x 20 mg pills or as prescribed by the doctor. Billed monthly </h4>
	<h4> $30.00 </h4>
	<div class="renewal-icon"> <span class="glyphicon glyphicon-refresh"></span>  </div>
	<div class="icon_close"> <span class="glyphicon glyphicon-remove"></span> </div>
	</div></div> 
	<div class="clearfix"></div>
		<div class="cart_numbers">
		<ul>
		<li> Order Sub-total  <span> $20.00 </span></li>
		<li> Membership <span> $10.00 </span></li>
		<li> Medical Fee <span> $5.00 </span></li>
		<li> Promo Discount <span> -$30.00 </span></li>
		<li class="total"> Grand Total <span> $5.00 </span></li>
		<li class="promo_code_btn"> You save $30.00 with this promo code! </li>
			</ul> 
			</div>
		<div class="checkout-coupon"> <input type="text" name="coupon" placeholder="Promo Code"/> <a href="#" class="btn_apply"> Apply </a> </div>
</div>  </div><button tabindex="0" type="orange" class="next_btn">Next</button></div>
    );
  }
}

export default Cart;

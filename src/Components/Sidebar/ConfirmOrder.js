import React, { Component } from 'react';
import pro_img1 from '../../assets/images/pro_img1.png';

class ConfirmOrder extends Component {
  render() {
    return (
			 <div>
 <div class="cart_section no-items">
  <a href="javascript:void(0)" class="closebtn" onClick="closeNav11()"> <span class="glyphicon glyphicon-menu-right"></span> </a>
  
  <div class="symbols">  
   <div class="symbols-title">Payment</div>
   <ul>
   <li class="symbols1">  </li>
   <li class="symbols2">  </li>
   <li class="symbols3">  </li>
   <li class="symbols4 ">  </li>
   <li class="symbols5 active">  </li>
   </ul>
  </div>
 
 <div class="cart_items ">
 <div class="cart-details_product">
<div class="cart-details_product-image"> <img src={pro_img1}/></div>
<div class="cart-details_product-details">  
<h4> Complete Hair Kit </h4>
<h4 class="description"> Monthly subscription to save your hair </h4>
<h4> $44.00 </h4>
<div class="renewal-icon"> <span class="glyphicon glyphicon-refresh"></span>  </div>
<div class="icon_close"> <span class="glyphicon glyphicon-remove"></span> </div>
</div></div> <div class="clearfix"></div>
<div class="cart_numbers">
<ul>
<li> Order Sub-total *   <span> $34.00 </span></li>
<li> Membership <span> $10.00 </span></li>
<li> Medical Fee  <span> $5.00 </span></li>
<li> Promo Discount <span> $0.00 </span></li>
<li class="total"> Grand Total <span> $49.00 </span></li>

<li class="includes"> * Includes pharmacy & drug fees </li>
<li class="shipping-add"> Shipping Address </li>
<li> 1031 n 3rd st., 101 <br/> philadelphia , PA <br/> 19123 <br/> USA </li>
<li  class="billing"> Billing Information </li>
<li> Master Card •••• •••• ••••  2122 </li>

<div class="checkout_recurring-charge">Your membership renews automatically. You can cancel any time.</div> 

</ul> </div>

</div>  </div>  <div class="clear"></div>  <button tabindex="0" type="orange" class="absolute_no">Confirm & Start Visit</button></div> 
    );
  }
}

export default ConfirmOrder;

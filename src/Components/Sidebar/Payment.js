import React, { Component } from 'react';

class Payment extends Component {
  render() {
    return (
			 <div id="mySidenav6" class="sideright">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav6()"> <span class="glyphicon glyphicon-menu-right"></span> </a>
  
    <div class="symbols">  
   <div class="symbols-title">Payment</div>
   <ul>
   <li class="symbols1">  </li>
   <li class="symbols2">  </li>
   <li class="symbols3">  </li>
   <li class="symbols4 active">  </li>
   <li class="symbols5">  </li>
   </ul>
  </div>
  
<div class="login_form">
<div class="register_box"><h3>Payment information</h3><h5>Please enter your paymennt information</h5>
<form>
<input type="text" class="card" name="firstName" value="" autocomplete="true" placeholder="Card number"/> 
<input type="text" class="cvc"  value="" autocomplete="true" placeholder="MM / YY / CVC"/>
 
<div class="clearfix"></div>

<h5> Your order will be processed immediately and products will be shipped after medical review.</h5>
</form></div></div> <button tabindex="0" type="button" class="login_btn"> Add New Payment Method </button></div>
    );
  }
}

export default Payment;

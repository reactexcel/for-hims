import React, { Component } from 'react';

class Shipping extends Component {
  render() {
    return (
			 <div id="mySidenav5" class="sideright">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav5()"> <span class="glyphicon glyphicon-menu-right"></span> </a>
  
    <div class="symbols">  
   <div class="symbols-title">Shipping</div>
   <ul>
   <li class="symbols1">  </li>
   <li class="symbols2">  </li>
   <li class="symbols3 active">  </li>
   <li class="symbols4">  </li>
   <li class="symbols5">  </li>
   </ul>
  </div>
  
<div class="login_form">
<div class="register_box"><h3>Shipping Information</h3><h5>Please enter your home shipping address</h5>
<form>
<input type="text" name="firstName" value="" autocomplete="true" placeholder="First Name"/>
  <input type="text" name="lastName" value="" autocomplete="true"  placeholder="Last Name"/>
  <input type="text" name="line1" value="" autocomplete="true"  placeholder="Street Address"/>
  <input type="text" name="line2" value="" autocomplete="true" placeholder="Apt/Suite"/>
  <input type="text" name="city" value="" autocomplete="true" placeholder="City"/>
  <input type="text" name="state" value="" autocomplete="true"  placeholder="State"/>
  <input type="text" name="zip" value="" autocomplete="true"  placeholder="Zip"/>
  <input type="text" name="united" value="" autocomplete="true"  placeholder="United States"/>
  <input type="number" name="phone" value="" autocomplete="true"  placeholder="Phone"/> 

<div class="switch_title"> <h4> Send me SMS Delivery Updates </h4> <label class="switch"> <input type="checkbox"/><span class="slid round"></span></label></div>

</form></div></div> <button tabindex="0" type="button" class="login_btn">Save Shipping Address </button></div>
    );
  }
}

export default Shipping;

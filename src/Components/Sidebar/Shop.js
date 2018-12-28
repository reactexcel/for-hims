import React, { Component } from 'react';
import empty_cart from '../../assets/images/empty_cart.png';

class Shop extends Component {
  render() {
    return (
			 <div id="mySidenav4" class="sideright">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav4()"> <span class="glyphicon glyphicon-menu-right"></span> </a>
  
    <div class="symbols">  
   <div class="symbols-title">Cart</div>
   <ul>
   <li class="symbols1 active">  </li>
   <li class="symbols2">  </li>
   <li class="symbols3">  </li>
   <li class="symbols4">  </li>
   <li class="symbols5">  </li>
   </ul>
  </div>
  
<div class="login_form">
<div class="register_box">
<h3>Your cart is empty!</h3>
<h5>Please enter your home shipping address</h5>
<img src={empty_cart} /> </div> </div> <button tabindex="0" type="button" class="login_btn">Shop All </button> </div>
    );
  }
}

export default Shop;

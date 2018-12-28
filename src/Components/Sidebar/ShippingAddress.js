import React, { Component } from 'react';

class ShippingAddress extends Component {
  render() {
    return (
			 <div>
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav8()"> <span class="glyphicon glyphicon-menu-left"></span> </a>
  
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
  

<div class="shipping_address_box"> <h3> Home Shipping address </h3>
<h4 class="grew"> This is the shippping address we will send to.</h4>


<blockquote> 333 N Central Ave, Test <br/> Phoenix, AZ <br/> 85004-2189 <br/> USA</blockquote>
<a href="#" class="read"> Create New Address </a>
</div>
<button tabindex="0" type="button" class="login_btn"> Save Shipping Address </button></div>
    );
  }
}

export default ShippingAddress;

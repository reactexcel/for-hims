import React, { Component } from 'react';

class ShippingAddress extends Component {
  render() {
    return (
			<div id="mySidenav8">
        <div className="symbols">  
          <div className="symbols-title">Shipping</div>
          <ul>
            <li className="symbols1">  </li>
            <li className="symbols2">  </li>
            <li className="symbols3 active">  </li>
            <li className="symbols4">  </li>
            <li className="symbols5">  </li>
          </ul>
        </div>
        <div className="shipping_address_box"> 
          <h3> Home Shipping address </h3>
          <h4 className="grew"> This is the shippping address we will send to.</h4>
          <blockquote> 333 N Central Ave, Test <br/> Phoenix, AZ <br/> 85004-2189 <br/> USA</blockquote>
          <a href="#" className="read"> Create New Address </a>
        </div>
        <button tabIndex="0" type="button" className="login_btn"> Save Shipping Address </button>
      </div>
    );
  }
}

export default ShippingAddress;

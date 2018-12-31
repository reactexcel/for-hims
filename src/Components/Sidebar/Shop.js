import React, { Component } from 'react';
import empty_cart from '../../assets/images/empty_cart.png';

class Shop extends Component {
  render() {
    return (
			<div id="mySidenav4">
        <div className="symbols">  
          <div className="symbols-title">Cart</div>
          <ul>
            <li className="symbols1 active">  </li>
            <li className="symbols2">  </li>
            <li className="symbols3">  </li>
            <li className="symbols4">  </li>
            <li className="symbols5">  </li>
          </ul>
        </div>
        <div className="login_form">
          <div className="register_box">
            <h3>Your cart is empty!</h3>
            <h5>Please enter your home shipping address</h5>
            <img src={empty_cart} /> 
          </div> 
        </div> 
        <button tabIndex="0" type="button" className="login_btn">Shop All </button> 
      </div>
    );
  }
}

export default Shop;

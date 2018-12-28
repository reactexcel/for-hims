import React, { Component } from 'react';

class Shipping extends Component {
  render() {
    return (
		  <div id="mySidenav5">
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
        <div className="login_form">
          <div className="register_box">
            <h3>Shipping Information</h3>
            <h5>Please enter your home shipping address</h5>
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
              <div className="switch_title"> 
                <h4> Send me SMS Delivery Updates </h4> 
                <label className="switch"> 
                  <input type="checkbox"/>
                  <span className="slid round"></span>
                </label>
              </div>
            </form>
          </div>
        </div> 
        <button tabIndex="0" type="button" className="login_btn">Save Shipping Address </button>
      </div>
    );
  }
}

export default Shipping;

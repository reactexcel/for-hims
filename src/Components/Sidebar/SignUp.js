import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
			 <div id="mySidenav3">
  <a href="javascript:void(0)" class="closebtn" onClick="closeNav3()"> <span class="glyphicon glyphicon-menu-right"></span> </a>
  
    <div class="symbols">  
   <div class="symbols-title">Sign up</div>
   <ul>
   <li class="symbols1 active">  </li>
   <li class="symbols2">  </li>
   <li class="symbols3">  </li>
   <li class="symbols4">  </li>
   <li class="symbols5">  </li>
   </ul>
  </div>
  
<div class="login_form"><div class="register_box"><h3>Welcome to hims!</h3><h5>Fill in your details to create an account</h5>
<form>
<input type="email" name="email" value="" placeholder="Email"/>
<input type="password" name="password" value="" placeholder="Password"/>
<div class="account_register"> <input type="checkbox"  value="on"/> I agree to the <a class="register-link" href="">Terms and Conditions</a> and <a class="forgot-password-link" href="">Privacy Policy</a> <br/> Already have an account? <a href="#">Sign In</a> </div></form></div>

</div> <button tabindex="0" type="button" class="login_btn">Login </button></div>
    );
  }
}

export default SignUp;

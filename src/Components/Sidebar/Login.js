import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
			  <div id="mySidenav2" class="sideright">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav2()"> <span class="glyphicon glyphicon-menu-right"></span> </a>
  <div class="login_form">
<div class="register_box"><h3>Welcome Back!</h3><h5>Please login to your account</h5>
<form>
<input type="email" name="email" value="" placeholder="Email"/>
<input type="password" name="password" value="" placeholder="Password"/>
<div class="account_register">Don't have an account? <a class="register-link" href="">Register</a> <br/> <a class="forgot-password-link" href="">forgot password?</a> </div></form></div>
</div><button tabindex="0" type="button" class="login_btn">Login </button> </div>
    );
  }
}

export default Login;

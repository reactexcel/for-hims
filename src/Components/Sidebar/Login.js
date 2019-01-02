import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div id="mySidenav2">
        <div className="login_form">
          <div className="register_box">
            <h3>Welcome Back!</h3>
            <h5>Please login to your account</h5>
            <form>
              <input type="email" name="email" value="" placeholder="Email" />
              <input
                type="password"
                name="password"
                value=""
                placeholder="Password"
              />
              <div className="account_register">
                Don't have an account?{" "}
                <a className="register-link" href="">
                  Register
                </a>{" "}
                <br />{" "}
                <a className="forgot-password-link" href="">
                  forgot password?
                </a>{" "}
              </div>
            </form>
          </div>
        </div>
        <button tabIndex="0" type="button" className="login_btn">
          Login{" "}
        </button>{" "}
      </div>
    );
  }
}

export default Login;

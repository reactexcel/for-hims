import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div id="mySidenav3">
        <div className="symbols">
          <div className="symbols-title">Sign up</div>
          <ul>
            <li className="symbols1 active"> </li>
            <li className="symbols2"> </li>
            <li className="symbols3"> </li>
            <li className="symbols4"> </li>
            <li className="symbols5"> </li>
          </ul>
        </div>
        <div className="login_form">
          <div className="register_box">
            <h3>Welcome to hims!</h3>
            <h5>Fill in your details to create an account</h5>
            <form>
              <input type="email" name="email" value="" placeholder="Email" />
              <input
                type="password"
                name="password"
                value=""
                placeholder="Password"
              />
              <div className="account_register">
                {" "}
                <input type="checkbox" value="on" /> I agree to the{" "}
                <a className="register-link" href="">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a className="forgot-password-link" href="">
                  Privacy Policy
                </a>{" "}
                <br /> Already have an account? <a href="#">Sign In</a>{" "}
              </div>
            </form>
          </div>
        </div>{" "}
        <button tabindex="0" type="button" className="login_btn">
          Login{" "}
        </button>
      </div>
    );
  }
}

export default SignUp;

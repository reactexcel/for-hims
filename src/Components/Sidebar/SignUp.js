import React, { Component } from "react";
import validate from "../../utils/validate";
import ErrorText from "../Generic/ErrorText";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "", password: "", checked: false },
      errors: {}
    };
  }
  handleChange = e => {
    const { target } = e;
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data });
  };
  handleSubmit = () => {
    const errors = validate(this.state.data);
    this.setState({ errors });
  };

  render() {
    const {
      data: { email, password, checked },
      errors
    } = this.state;
    return (
      <div id="mySidenav3">
        <div className="login_form">
          <div className="register_box">
            <h3>Welcome to hims!</h3>
            <h5>Fill in your details to create an account</h5>
            <form>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />
              <div className="account_register">
                <input
                  type="checkbox"
                  name="checked"
                  value={checked}
                  onChange={this.handleChange}
                />
                I agree to the
                <a className="register-link" href="">
                  Terms and Conditions
                </a>
                and
                <a className="forgot-password-link" href="">
                  Privacy Policy
                </a>
                <br /> Already have an account? <a href="#">Sign In</a>
              </div>
            </form>
          </div>
        </div>
        <button
          tabIndex="0"
          type="button"
          className="login_btn"
          onClick={this.handleSubmit}
        >
          Sign Up
        </button>
      </div>
    );
  }
}

export default SignUp;

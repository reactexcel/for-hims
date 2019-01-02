import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      checked: false
    };
  }
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleCheckBoxChange = () =>
    this.setState(prevState => ({ checked: !prevState.checked }));
  render() {
    const { email, password, checked } = this.state;
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
                  value={checked}
                  onChange={this.handleCheckBoxChange}
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
        <button tabIndex="0" type="button" className="login_btn">
          Login
        </button>
      </div>
    );
  }
}

export default SignUp;

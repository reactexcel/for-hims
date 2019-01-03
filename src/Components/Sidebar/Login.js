import React, { Component } from "react";
import validate from "../../utils/validate";
import ErrorText from "../Generic/ErrorText";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "", password: "" },
      errors: {}
    };
  }
  handleChange = e => {
    const { value, name } = e.target;
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
      data: { email, password },
      errors
    } = this.state;
    return (
      <div id="mySidenav2">
        <div className="login_form">
          <div className="register_box">
            <h3>Welcome Back!</h3>
            <h5>Please login to your account</h5>
            <form>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />
              {errors.email && <ErrorText text={errors.email} />}
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />
              {errors.password && <ErrorText text={errors.password} />}
              <div className="account_register">
                Don't have an account?
                <a className="register-link" href="">
                  Register
                </a>
                <br />
                <a className="forgot-password-link" href="">
                  forgot password?
                </a>
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
          Login
        </button>
      </div>
    );
  }
}

export default Login;

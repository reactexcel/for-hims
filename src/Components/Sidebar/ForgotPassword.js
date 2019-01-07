import React, { Component } from "react";
import validate from "../../utils/validate";
import ErrorText from "../Generic/ErrorText";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "" },
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
      data: { email },
      errors
    } = this.state;
    return (
      <>
        <div id="mySidenav2">
          <div className="login_form">
            <div className="register_box">
              <h3>Welcome Back!</h3>
              <h5>Please enter your email</h5>
              <form>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                {errors.email && <ErrorText text={errors.email} />}
                <div className="account_register">
                  Have an account?{" "}
                  <a
                    className="forgot-password-link"
                    onClick={this.props.togglePassword}
                  >
                    Login
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
            Reset Your Password
          </button>
        </div>
      </>
    );
  }
}

export default ForgotPassword;

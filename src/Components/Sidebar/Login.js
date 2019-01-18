import React, { Component } from "react";
import validate from "../../utils/validate";
import ErrorText from "../Generic/ErrorText";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import { connect } from "react-redux";
import { loginRequest } from "../../actions";
import Account from "./Account";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "", password: "" },
      errors: {},
      showRegister: false,
      showForgotPassword: false
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
    delete errors["termsAndConditions"];
    if (!Object.keys(errors).length) {
      this.props.loginRequest({ ...this.state.data });
    }
  };
  toggleRegister = () => {
    this.setState(prevState => ({ showRegister: !prevState.showRegister }));
  };
  togglePassword = () => {
    this.setState(prevState => ({
      showForgotPassword: !prevState.showForgotPassword
    }));
  };
  render() {
    const {
      data: { email, password },
      errors,
      showRegister,
      showForgotPassword
    } = this.state;
    const { isSuccess, isLoading, isError, message } = this.props.login;
    if (isSuccess) {
      return <Account />;
    }
    return (
      <>
        {isLoading ? (
          <div className="login-loader">
            <div>Loading your account...</div>
            <div>Hang tight</div>
            <div className="loader" />
          </div>
        ) : showRegister ? (
          <SignUp toggleRegister={this.toggleRegister} />
        ) : showForgotPassword ? (
          <ForgotPassword togglePassword={this.togglePassword} />
        ) : (
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
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && <ErrorText text={errors.email} />}
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={this.handleChange}
                    className={errors.password ? "error" : ""}
                  />
                  {errors.password && <ErrorText text={errors.password} />}
                  <div className="account_register">
                    Don't have an account?
                    <a className="register-link" onClick={this.toggleRegister}>
                      Register
                    </a>
                    <br />
                    <a
                      className="forgot-password-link"
                      onClick={this.togglePassword}
                    >
                      forgot password?
                    </a>
                  </div>
                  {isError && message && (
                    <div className="server_error">{message}</div>
                  )}
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
        )}
      </>
    );
  }
}

const mapStateToProps = ({ login }) => ({ login });

export default connect(
  mapStateToProps,
  { loginRequest }
)(Login);

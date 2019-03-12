import React, { Component } from "react";
import { validateForm } from "../../utils/validate";
import ErrorText from "../Generic/ErrorText";
import Account from "./Account";
import { connect } from "react-redux";
import { signupRequest } from "../../actions";

/**UI component for Sign Up */
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "", password: "", termsAndConditions: false },
      errors: {},
      showLogin: false
    };
  }
  static defaultProps = {
    toggleRegister: () => {}
  };
  componentDidUpdate(prevProps) {
    if (
      this.props.user.isSuccess &&
      prevProps.user.isSuccess !== this.props.user.isSuccess
    ) {
      this.props.closeSidebar();
    }
  }

  /**Handles the change for input tag */
  handleChange = e => {
    const { target } = e;
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data });
  };

  /**Validates the data and calls the action for sign up if data is validated */
  handleSubmit = () => {
    const errors = validateForm(this.state.data);
    this.setState({ errors });
    if (!Object.keys(errors).length) {
      this.props.signupRequest({ ...this.state.data });
    }
  };

  render() {
    const {
      data: { email, password, checked },
      errors
    } = this.state;
    const { isSuccess, isLoading, isError, message } = this.props.user;
    if (isSuccess) {
      return <Account />;
    }
    return (
      <>
        {isLoading ? (
          <div className="login-loader">
            <div>Loading your account...</div>
            <div>Hang tight</div>
          </div>
        ) : (
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
                    <input
                      type="checkbox"
                      name="termsAndConditions"
                      value={checked}
                      onChange={this.handleChange}
                    />
                    I agree to the
                    <a className="register-link" href="">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a className="forgot-password-link" href="">
                      Privacy Policy
                    </a>
                    <br /> Already have an account?{" "}
                    <a
                      onClick={() => {
                        this.props.toggleRegister();
                      }}
                    >
                      Sign In
                    </a>
                  </div>
                  {errors.termsAndConditions && (
                    <div className="error--terms-and-condition">
                      {errors.termsAndConditions}
                    </div>
                  )}
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
              Sign Up
            </button>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = ({ user }) => ({ user });
export default connect(
  mapStateToProps,
  { signupRequest }
)(SignUp);

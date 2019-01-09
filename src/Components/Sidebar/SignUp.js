import React, { Component } from "react";
import validate from "../../utils/validate";
import ErrorText from "../Generic/ErrorText";
import Account from "./Account";
import { connect } from "react-redux";
import { signupRequest } from "../../actions";
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
    if (!Object.keys(errors).length) {
      this.props.signupRequest();
    }
  };

  render() {
    const {
      data: { email, password, checked },
      errors
    } = this.state;
    const { isSuccess, isLoading } = this.props.signup;
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
                    </a>
                    and
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
const mapStateToProps = ({ signup }) => ({ signup });
export default connect(
  mapStateToProps,
  { signupRequest }
)(SignUp);

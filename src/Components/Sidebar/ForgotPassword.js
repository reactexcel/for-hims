import React, { Component } from "react";
import validate from "../../utils/validate";
import ErrorText from "../Generic/ErrorText";
import { forgotPasswordRequest } from "../../actions";
import { connect } from "react-redux";

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
    delete errors["password"];
    delete errors["termsAndConditions"];
    console.log(errors);
    if (!Object.keys(errors).length) {
      this.props.forgotPasswordRequest({ ...this.state.data });
    }
  };

  render() {
    const {
      data: { email },
      errors
    } = this.state;
    console.log(this.props.forgotpsw, "asd");
    const { isLoading, isError, isSuccess, message } = this.props.forgotpsw;
    return (
      <>
        {isLoading ? (
          <div className="login-loader">
            <div>Loading...</div>
            <div>Hang tight</div>
            <div className="loader" />
          </div>
        ) : (
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
                    className={errors.email ? "error" : ""}
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
                {isError && message && (
                  <div className="server_error">{message}</div>
                )}
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
        )}
      </>
    );
  }
}

const mapStateToProps = ({ forgotpsw }) => ({ forgotpsw });

export default connect(
  mapStateToProps,
  { forgotPasswordRequest }
)(ForgotPassword);

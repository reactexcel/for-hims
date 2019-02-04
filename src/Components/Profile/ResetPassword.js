import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import ProfileField from "./ProfileField";
import { resetPasswordFields as fields } from "../../constants/profile";
import { firebase } from "../../Firebase";

class ResetPassword extends Component {
  renderFields = () =>
    fields.map(({ name, placeholder }) => (
      <Field
        component={ProfileField}
        name={name}
        label={placeholder}
        type="password"
        key={name}
      />
    ));
  handleSubmit = values => {
    this.props.onResetPassword(values);
  };
  componentDidUpdate(prevProps) {
    if (
      this.props.resetPassword.isSuccess &&
      prevProps.resetPassword.isSuccess !== this.props.resetPassword.isSuccess
    ) {
      this.props.reset();
    }
  }
  render() {
    const { isError, isSuccess, isLoading, message } = this.props.resetPassword;
    return (
      <div className="profile_module">
        <h3>Password</h3>
        <form className="profile_form">
          {this.renderFields()}
          <button
            onClick={this.props.handleSubmit(this.handleSubmit)}
            disabled={isLoading}
          >
            {isLoading ? "Resetting Password" : "Reset Password"}
          </button>
          {isSuccess && message && (
            <div className="primary-text">{message}</div>
          )}
        </form>
        {isError && message && <div className="server_error">{message}</div>}
      </div>
    );
  }
}
const validate = values => {
  const error = {};
  if (values.newPassword !== values.confirmPassword) {
    error.confirmPassword = "Password do not match";
  }
  for (let value of fields) {
    if (!values[value.name]) {
      error[value.name] = "Required Field";
    }
  }
  return error;
};

const asyncValidate = async (values, ownProps) => {
  // return new Promise(async (resolve, reject) => {
  // (async function getUserEmail() {
  return fetch(firebase.validateOldPassword(values.oldPassword))
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e, "eeeeeeeeee");
    });
};
// };

export default reduxForm({
  form: "resetPassword",
  validate,
  asyncValidate,
  asyncBlurFields: ["oldPassword"]
})(ResetPassword);

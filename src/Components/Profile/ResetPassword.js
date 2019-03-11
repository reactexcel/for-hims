import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import ProfileField from "../Generic/ProfileField";
import { resetPasswordFields as fields } from "../../constants/profile";

/**UI Component for Reset Password  */
class ResetPassword extends Component {
  /**Render the fields for reset password form */
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
  /**Calls the action for resetting password
   * @param {Object} values values from redux form
   */
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
/**Validates the values from redux form before submitting
 * @param {Object} values values from the redux form
 * @returns {Object} error message for respective fields in an object with field as properties
 */
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

export default reduxForm({
  form: "resetPassword",
  validate,
  asyncBlurFields: ["oldPassword"]
})(ResetPassword);

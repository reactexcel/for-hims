import React from "react";
import { Field, reduxForm } from "redux-form";
import ProfileField from "./ProfileField";
import { resetPasswordFields as fields } from "../../constants/profile";

function ResetPassword(props) {
  const renderFields = () =>
    fields.map(({ name, placeholder }) => (
      <Field
        component={ProfileField}
        name={name}
        label={placeholder}
        type="password"
        key={name}
      />
    ));
  const handleSubmit = values => {
    console.log(values);
    props.onResetPassword(values);
  };
  const { isError, isSuccess, isLoading, message } = props.resetPassword;
  return (
    <div className="profile_module">
      <h3>Password</h3>
      <form className="profile_form">
        {renderFields()}
        <button onClick={props.handleSubmit(handleSubmit)} disabled={isLoading}>
          {isLoading ? "Resetting Password" : "Reset Password"}
        </button>
        {isSuccess && message && <div className="primary-text">{message}</div>}
      </form>
      {isError && message && <div className="server_error">{message}</div>}
    </div>
  );
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

// const asyncValidate = values => {
//   firebase
//     .validateOldPassword(values)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// };

export default reduxForm({
  form: "resetPassword",
  validate
  // asyncValidate,
  // asyncBlurFields: ["oldPassword"]
})(ResetPassword);

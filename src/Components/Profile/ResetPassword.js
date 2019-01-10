import React from "react";
import { Field, reduxForm } from "redux-form";
import ProfileField from "./ProfileField";

const fields = [
  { name: "oldPassword", placeholder: "Old Password" },
  { name: "newPassword", placeholder: "New Password" },
  { name: "confirmPassword", placeholder: "Re-enter new password" }
];
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
  };
  return (
    <div className="profile_module">
      <h3>Password</h3>
      <form>
        {renderFields()}
        <button onClick={props.handleSubmit(handleSubmit)}>
          Reset Password
        </button>
      </form>
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

export default reduxForm({ form: "resetPassword", validate })(ResetPassword);

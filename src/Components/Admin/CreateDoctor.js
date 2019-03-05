import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { doctorInfoFields as fields, usaStates } from "../../constants/profile";
import ProfileField from "../Generic/ProfileField";
import ErrorText from "../Generic/ErrorText";

/**Create Doctor will render a form to
 * @param {*} props props of create doctor component
 */
function CreateDoctor(props) {
  /** renders all the fields for doctor*/
  const renderFields = () =>
    fields.map(({ name, placeholder, type }) => (
      <Field
        component={ProfileField}
        name={name}
        label={placeholder}
        type={type}
        key={name}
        parse={
          name === "phone"
            ? value => (isNaN(parseInt(value, 10)) ? null : parseInt(value, 10))
            : undefined
        }
      />
    ));
  /** render state field for Doctor*/
  const renderStates = ({ input, meta: { touched, error } }) => (
    <>
      <select {...input} className={touched && error ? "error" : ""}>
        <option value="">
          Select a state for which Doctor will check the customers{" "}
        </option>
        {usaStates.map(({ name, abbreviation }) => (
          <option value={`${name}, ${abbreviation}`} key={name}>
            {name}
          </option>
        ))}
      </select>
      {touched && error && <ErrorText text={error} />}
    </>
  );
  /**To submit Doctor details to parent function which will call createUser action
   * @param values values of redux form
   */
  const submitDoctorDetails = values => {
    props.onSubmitDocotorDetails(values);
  };
  /**to reset form */
  const onCancel = event => {
    event.preventDefault();
    props.reset();
  };
  /**Using useEffect hook to clear out form when createUser action is successful */
  useEffect(() => {
    if (props.createUser.isSuccess) {
      props.reset();
    }
  }, [props.createUser.isSuccess]);

  const { isLoading, isError, isSuccess, message } = props.createUser;
  return (
    <div className="profile_module doctor_module">
      <h2>Create Doctor's Profile</h2>

      <form className="doctor_form">
        {renderFields()}
        <Field component={renderStates} name="states" />
        {isSuccess && message && (
          <div className="server_success">{message}</div>
        )}

        {isError && message && <div className="server_error">{message}</div>}
        <button onClick={props.handleSubmit(submitDoctorDetails)}>
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>
        <button className="underline_button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

/**To validate Create Doctor form values
 * @param values values of redux form
 * @returns error object if any
 */
const validate = values => {
  const error = {};
  for (let value of fields) {
    if (!values[value.name]) {
      error[value.name] = "Required Field";
    }
  }
  if (!values.states) {
    error["states"] = "Required Field";
  }
  return error;
};

export default reduxForm({
  form: "createDoctorForm",
  validate
})(CreateDoctor);

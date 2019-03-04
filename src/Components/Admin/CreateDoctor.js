import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { doctorInfoFields as fields, usaStates } from "../../constants/profile";
import ProfileField from "../Generic/ProfileField";
import ErrorText from "../Generic/ErrorText";
function CreateDoctor(props) {
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
  const submitDoctorDetails = values => {
    props.onSubmitDocotorDetails(values);
  };
  return (
    <div className="profile_module">
      <h3>Create Doctor's Profile</h3>

      <form className="doctor_form">
        {renderFields()}
        <Field component={renderStates} name="states" />
        <button onClick={props.handleSubmit(submitDoctorDetails)}>
          Save Changes
        </button>
        <button className="underline_button" onClick={props.reset}>
          Cancel
        </button>
      </form>
    </div>
  );
}

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

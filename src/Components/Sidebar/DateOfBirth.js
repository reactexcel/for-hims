import React, { Component } from "react";
import { dateOfBirthFields as fields } from "../../constants/profile";
import { Field, reduxForm } from "redux-form";
import DateFormField from "../Generic/DateFormField";

class DateOfBirth extends Component {
  renderFields = () =>
    fields.map(({ name, placeholder }) => (
      <Field
      parse={value => isNaN(parseInt(value, 10)) ? null : parseInt(value, 10)}
        component={DateFormField}
        name={name}
        label={placeholder}
        key={name}
      />
    ));
  render() {
    return (
      <>
        <div className="cart_section">
          <div className="symbols">
            <div className="symbols-title">Cart</div>
            <ul>
              <li className="symbols1 active"> </li>
              <li className="symbols2"> </li>
              <li className="symbols3 "> </li>
              <li className="symbols4"> </li>
              <li className="symbols5"> </li>
            </ul>
          </div>
          <div className="cart-dob_section">
            <div className="dob_title">Date of Birth</div>
            <div>What is your date of birth?</div>
            <form className="dob_form">{this.renderFields()}</form>
          </div>
        </div>
      </>
    );
  }
}

const validate = values => {
  const error = {};
  if (values.month < 0 || values.month > 12) {
    error.month = "Invalid Month";
  }
  if (values.day < 0 || values.day > 31) {
    error.day = "Invalid Day";
  }
  for (let value of fields) {
    if (!values[value.name]) {
      error[value.name] = "Required Field";
    }
  }
  return error;
};
export default reduxForm({
  form: "dateForm",
  validate
})(DateOfBirth);

import React from "react";
import ErrorText from "../Generic/ErrorText";
import PropTypes from 'prop-types'

/** DateFormField is a UI component which will render fields
 *  for DateOfBirth Component */
export default function DateFormField({
  label,
  input,
  meta: { touched, error }
}) {
  return (
    <div className="dob_fields">
      <input
        {...input}
        placeholder={label}
        type="text"
        maxLength={label === "YYYY" ? 4 : 2}
        minLength={label === "YYYY" ? 4 : 1}
        className={touched && error ? "error" : ""}
      />
      {touched && error && <ErrorText text={error} />}
    </div>
  );
}

DateFormField.propTypes = {
  /**Placeholder of the field */
  label: PropTypes.string.isRequired,
  /**A boolean value which tells whether a field is touched or not */
  touched: PropTypes.bool,
  /**A string for error text */
  error: PropTypes.string,
  /**Input Props */
  input: PropTypes.object.isRequired
};

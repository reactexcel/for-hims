import React from "react";
import ErrorText from "./ErrorText";
import PropTypes from "prop-types";

/**ProfileField is a UI component which will render fields
 *  for ProfileInfo Component  */
export default function ProfileField({
  label,
  input,
  type,
  meta: { touched, error }
}) {
  console.log(input, "as");
  return (
    <>
      <input
        {...input}
        placeholder={label}
        type={type}
        className={touched && error ? "error" : ""}
      />
      {touched && error && <ErrorText text={error} />}
    </>
  );
}

ProfileField.propTypes = {
  /**Placeholder of the field */
  label: PropTypes.string.isRequired,
  /**type for the input tag */
  type: PropTypes.string.isRequired,
  /**A boolean value which tells whether a field is touched or not */
  touched: PropTypes.bool.isRequired,
  /**A string for error text */
  error: PropTypes.string,
  /**Input Props */
  input: PropTypes.object.isRequired
};

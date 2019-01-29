import React from "react";
import ErrorText from "../Generic/ErrorText";

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
        maxLength={label === "YY" ? 4 : 2}
        className={touched && error ? "error" : ""}
      />
      {touched && error && <ErrorText text={error} />}
    </div>
  );
}

import React from "react";
import ErrorText from "../Generic/ErrorText";

export default function ProfileField({
  label,
  input,
  type,
  meta: { touched, error }
}) {
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

import React from "react";
import PropTypes from "prop-types";

/**UI component for showing error text */
export default function ErrorText({ text }) {
  return <div className="error-text">{text}</div>;
}

ErrorText.propTypes = {
  /** A string for error text*/
  text: PropTypes.string.isRequired
};

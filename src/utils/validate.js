/**Validate function which is used for validating Login and SignUp form
 * @param {Object} data values from the signup and login form
 * @returns {Object} error message for respective fields in an object with field as properties
 */
export default data => {
  const error = {};
  if (!data.email) {
    error.email = "Required Field";
  } else if (!validateEmail(data.email)) {
    error.email = "Invalid Email";
  }
  if (!data.password) {
    error.password = "Required Field";
  } else if (data.password.length < 6) {
    error.password = "Password must be at least 6 characters";
  }
  if (!data.termsAndConditions) {
    error.termsAndConditions =
      "You must agree to the Terms and Conditions and Privacy Policy to proceed.";
  }
  return error;
};

/**Validator function for validating email
 * @param {string} email email which needs to be validated
 * @returns {boolean} whether email is valid or not
 */
const validateEmail = email => {
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email);
};

/**Validator function for validating message
 * @param {string} message message which needs to be validated
 * @returns {Object} error message for respective fields in an object with field as properties
 */
export const validateMessage = message => {
  const error = {};
  if (!message.trim()) {
    error.message = "Required Field";
  }
  return error;
};

/**Validator function for validating Phone number
 * @param {number} phone phone which needs to be validated
 * @returns {boolean} whether phone is valid or not
 */
export const validatePhone = phone => {
  const regex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
  return regex.test(phone);
};

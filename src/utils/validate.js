export default data => {
  const error = {};
  if (!data.email) {
    error.email = "Required Field";
  } else if (!validateEmail(data.email)) {
    error.email = "Invalid Email";
  }
  if (!data.password) {
    error.password = "Required Field";
  }else if(data.password.length < 6){
    error.password = "Password length must be greater than 6"
  }
  if (!data.termsAndConditions) {
    error.termsAndConditions =
      "You must agree to the Terms and Conditions and Privacy Policy to proceed.";
  }
  return error;
};

const validateEmail = email => {
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email);
};

export const validateMessage = (message) => {
  const error = {}
  if(!message.trim()){
    error.message = "Required Field"
  }
  return error;
}

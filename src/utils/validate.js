export default (data) => {
    const error = {}
    if(!data.email){
        error.email = "Required Field"
    }
    else if(!validateEmail(data.email)){
        error.email = "Invalid Email"
    }
    if(!data.password){
        error.password = "Required Field";
    }
    if(!data.termsAndConditions){
        error.termsAndConditions = "You must agree to the Terms and Conditions and Privacy Policy to proceed."
    }
    return error;
}

const validateEmail = (email) => {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
}
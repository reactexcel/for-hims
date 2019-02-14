import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { shippingAddressFields as fields } from "../../constants/profile";
import ProfileField from "../Profile/ProfileField";
import ErrorText from "../Generic/ErrorText";
import { usaStates } from "../../constants/profile";
import { addShippingAddressRequest } from "../../actions";
import { connect } from "react-redux";

class Shipping extends Component {
  static defaultProps = {
    renderNext: () => {}
  };

  handleSaveAddress = values => {
    this.props.addShippingAddressRequest({
      shippingAddress: values,
      uid: this.props.user.data.uid
    });
  };

  renderFields = () =>
    fields.map(({ name, placeholder }) => (
      <Field
        component={ProfileField}
        name={name}
        label={placeholder}
        type={"text"}
        key={name}
      />
    ));
  renderZipCode = ({ label, input, meta: { touched, error } }) => (
    <>
      <input {...input} type="text" maxLength={5} placeholder={label} />
      {touched && error && <ErrorText text={error} />}
    </>
  );

  render() {
    return (
      <>
        <div className="cart_section">
          <div className="symbols">
            <div className="symbols-title">Shipping</div>
            <ul>
              <li className="symbols1"> </li>
              <li className="symbols2"> </li>
              <li className="symbols3 active"> </li>
              <li className="symbols4"> </li>
              <li className="symbols5"> </li>
            </ul>
          </div>
          <div className="login_form">
            <div className="register_box">
              <h3>Shipping Information</h3>
              <h5>Please enter your home shipping address</h5>
              <form className="shipping_form">
                {this.renderFields()}
                <Field component="select" name="states">
                  {usaStates.map(({ name, abbreviation }) => (
                    <option value={`${name}, ${abbreviation}`} key={name}>
                      {name}
                    </option>
                  ))}
                </Field>
                <Field
                  component={this.renderZipCode}
                  name="zipcode"
                  label="Zip"
                />
                <input
                  type="text"
                  disabled
                  name="country"
                  value="United States"
                  readOnly
                />
                <div className="switch_title">
                  <h4> Send me SMS Delivery Updates </h4>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slid round" />
                  </label>
                </div>
                <button
                  className="underline_button"
                  onClick={this.props.toggleAddAddress}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
        <button
          tabIndex="0"
          type="button"
          className="next_btn"
          onClick={this.props.handleSubmit(this.handleSaveAddress)}
        >
          Save Shipping Address
        </button>
      </>
    );
  }
}
const validate = values => {
  const error = {};
  const regex = /(\d{5}([\-]\d{4})?)/;

  if (!regex.test(values.zipcode)) {
    error.zipcode = "Invalid ZIP code";
  }

  for (let value of fields) {
    if (!values[value.name]) {
      error[value.name] = "Required Field";
    }
  }
  if (!values.zipcode) {
    error.zipcode = "Required Field";
  }
  return error;
};

const mapStateToProps = ({ user, profile: { userProfile } }) => ({
  user,
  userProfile
});

export default reduxForm({
  form: "shippingForm",
  validate
})(
  connect(
    mapStateToProps,
    { addShippingAddressRequest }
  )(Shipping)
);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import ProfileField from "./ProfileField";
import { usaStates } from "../../constants/profile";
import ErrorText from "../Generic/ErrorText";
import { connect } from "react-redux";

const fields = [
  { name: "street", placeholder: "Street Address" },
  { name: "apt/suite", placeholder: "Apt/Suite" },
  { name: "city", placeholder: "City" }
];

class ProfileShippingAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditShippingAddress: false
    };
  }
  toggleEditShippingAddress = () =>
    this.setState(prevState => ({
      showEditShippingAddress: !prevState.showEditShippingAddress
    }));

  cancelEditShippingAddress = () => {
    this.props.reset();
    this.toggleEditShippingAddress();
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
    const { showEditShippingAddress } = this.state;
    console.log(this.props.profileShippingAddressForm);
    return (
      <div className="profile_module">
        {!showEditShippingAddress ? (
          <>
            <h3>Shipping Addresses</h3>
            <p>
              {this.props.profileShippingAddressForm &&
              this.props.profileShippingAddressForm.values
                ? this.props.profileShippingAddressForm.values.street
                : "1069 N Bodine St"}
              <br />{" "}
              {this.props.profileShippingAddressForm &&
              this.props.profileShippingAddressForm.values
                ? this.props.profileShippingAddressForm.values.states
                : "Philadelphia, PA"}
              <br />{" "}
              {this.props.profileShippingAddressForm &&
              this.props.profileShippingAddressForm.values
                ? this.props.profileShippingAddressForm.values.zipcode
                : "19123"}
              <br /> USA
            </p>
            <Link to="#" onClick={this.toggleEditShippingAddress}>
              edit
            </Link>
          </>
        ) : (
          <>
            <form className="profile_form">
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
              <button onClick={this.toggleEditShippingAddress}>
                Save Changes
              </button>
              <Link to="#" onClick={this.cancelEditShippingAddress}>
                Cancel
              </Link>
            </form>
          </>
        )}
      </div>
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

const mapStateToProps = ({ form: { profileShippingAddressForm } }) => ({
  profileShippingAddressForm
});

export default reduxForm({ form: "profileShippingAddressForm", validate })(
  connect(mapStateToProps)(ProfileShippingAddress)
);

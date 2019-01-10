import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import ProfileField from "./ProfileField";
import { usaStates } from "../../constants/profile";
import ErrorText from "../Generic/ErrorText";

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
  renderSelect = () => (
    <select>
      {usaStates.map(({ name }) => (
        <option value={name}>{name}</option>
      ))}
    </select>
  );
  renderZipCode = ({ label, input, meta: { touched, error } }) => (
    <>
      <input {...input} type="text" maxLength={5} placeholder={label} />
      {touched && error && <ErrorText text={error} />}
    </>
  );
  render() {
    const { showEditShippingAddress } = this.state;
    return (
      <div className="profile_module">
        {!showEditShippingAddress ? (
          <>
            <h3>Shipping Addresses</h3>
            <p>
              1069 N Bodine St
              <br /> Philadelphia, PA
              <br /> 19123
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
              <Field component={this.renderSelect} name="states" />
              <Field
                component={this.renderZipCode}
                name="zipcode"
                label="Zip"
              />
              <input type="text" disabled name="country" value="United States"/>
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

export default reduxForm({ form: "profileShippingAddressForm", validate })(
  ProfileShippingAddress
);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import ProfileField from "./ProfileField";
import { usaStates } from "../../constants/profile";
import ErrorText from "../Generic/ErrorText";
import { connect } from "react-redux";
import { shippingAddressFields as fields } from "../../constants/profile";

class ProfileShippingAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditShippingAddress: false
    };
  }
  openEditShippingAddress = () =>
    this.setState({
      showEditShippingAddress: true
    });

  cancelEditShippingAddress = () => {
    this.setState({ showEditShippingAddress: false });
  };
  componentDidMount() {
    this.props.initialize({ ...this.props.userProfile.data });
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.userProfile.isSuccess &&
      prevProps.userProfile.isSuccess !== this.props.userProfile.isSuccess
    ) {
      this.cancelEditShippingAddress();
    }
    // if (
    //   this.props.userProfile.data.shippingAddress &&
    //   prevProps.userProfile.data.shippingAddress.street !==
    //     this.props.userProfile.data.shippingAddress.street
    // ) {
    //   this.props.initialize({ ...this.props.userProfile.data });
    // }
  }

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
    const { shippingAddress } = this.props.userProfile.data;
    return (
      <div className="profile_module">
        {shippingAddress ? (
          !showEditShippingAddress ? (
            <>
              <h3>Shipping Addresses</h3>
              <p>
                {shippingAddress.street}
                <br /> {shippingAddress.states}
                <br /> {shippingAddress.zipcode}
                <br /> USA
              </p>
              <Link to="#" onClick={this.openEditShippingAddress}>
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
          )
        ) : (
          <>
            <h3>Shipping Addresses</h3>
            <div>There are no shipping address.</div>
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

export default reduxForm({
  form: "profileShippingAddressForm",
  validate,
  initialValues: {
    street: "1069 N Bodine St",
    states: "Philadelphia, PA",
    zipcode: "19123"
  }
})(connect(mapStateToProps)(ProfileShippingAddress));

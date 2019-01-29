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
    this.props.initialize({ ...this.props.userProfile.data.shippingAddress });
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.additionalInfo.isSuccess &&
      prevProps.additionalInfo.isSuccess !== this.props.additionalInfo.isSuccess
    ) {
      this.cancelEditShippingAddress();
    }

    if (
      this.props.userProfile.data.shippingAddress &&
      prevProps.userProfile.data.shippingAddress !==
        this.props.userProfile.data.shippingAddress
    ) {
      this.props.initialize({ ...this.props.userProfile.data.shippingAddress });
    }
  }

  handleUpdateShippingAddress = values => {
    this.props.onUpdateShippingAddress({
      shippingAddress: values
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
    const { showEditShippingAddress } = this.state;
    const { isLoading, isError, message } = this.props.additionalInfo;
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
                <button
                  onClick={this.props.handleSubmit(
                    this.handleUpdateShippingAddress
                  )}
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
                <Link to="#" onClick={this.cancelEditShippingAddress}>
                  Cancel
                </Link>
              </form>
              {isError && message && (
                <div className="server_error">{message}</div>
              )}
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

export default reduxForm({
  form: "profileShippingAddressForm",
  validate,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(ProfileShippingAddress);

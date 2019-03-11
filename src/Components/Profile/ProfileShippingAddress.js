import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import ProfileField from "../Generic/ProfileField";
import { usaStates } from "../../constants/profile";
import ErrorText from "../Generic/ErrorText";
import { shippingAddressFields as fields } from "../../constants/profile";

/**UI Component for seeing and editing Shipping Address */
class ProfileShippingAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditShippingAddress: false,
      index: 0
    };
  }
  /**Opens the form for editing the selected shipping address and initialize
   * the form with its current values
   * @param {number} index Index of array of shipping address
   */
  openEditShippingAddress = index => {
    this.props.initialize({
      ...this.props.userProfile.data.shippingAddress[index]
    });
    this.setState({
      showEditShippingAddress: true,
      index
    });
  };

  /**Closes the form for editing shipping address and resets the form */
  cancelEditShippingAddress = () => {
    this.setState({ showEditShippingAddress: false });
    this.props.reset();
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

    // if (
    //   this.props.userProfile.data.shippingAddress &&
    //   prevProps.userProfile.data.shippingAddress !==
    //     this.props.userProfile.data.shippingAddress
    // ) {
    //   this.props.initialize({
    //     ...this.props.userProfile.data.shippingAddress[0]
    //   });
    // }
  }

  /**Calls the action for updating the selected shipping address
   * @param {Object} values values from redux form
   */
  handleUpdateShippingAddress = values => {
    const { index } = this.state;
    let shippingAddress = [...this.props.userProfile.data.shippingAddress];
    shippingAddress.splice(index, 1, values);
    this.props.onUpdateShippingAddress({
      shippingAddress
    });
  };

  /**Renders the shipping address fields */
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

  /**Renders the field for ZIP CODE */
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
              {shippingAddress.map((add, index) => (
                <React.Fragment key={index}>
                  <p>
                    {add.street}
                    <br /> {add.states}
                    <br /> {add.zipcode}
                    <br /> USA
                  </p>
                  <Link
                    to="#"
                    onClick={() => this.openEditShippingAddress(index)}
                  >
                    edit
                  </Link>
                </React.Fragment>
              ))}
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

/**Validates the values from redux form before submitting
 * @param {Object} values values from the redux form
 * @returns {Object} error message for respective fields in an object with field as properties
 */
const validate = values => {
  const error = {};
  //Regex for testing the ZIPCODE for USA
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

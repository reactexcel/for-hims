import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { shippingAddressFields as fields } from "../../constants/profile";
import ProfileField from "../Generic/ProfileField";
import ErrorText from "../Generic/ErrorText";
import { usaStates } from "../../constants/profile";
import { addShippingAddressRequest } from "../../actions";
import { connect } from "react-redux";

/**UI component for Shipping Address form in FullCart */
class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ""
    };
  }
  static defaultProps = {
    renderNext: () => {},
    addNew: false
  };
  /**Calls the action for adding Shipping Address
   * @param {Object} values values from redux form
   */
  handleSaveAddress = values => {
    let comman = false;
    const validState = [
      "Arkansas",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Idaho",
      "Indiana",
      "Maine",
      "South Carolina",
      "Texas",
      "Virginia",
      "West Virginia"
    ];
    const state = validState.find((v, i) => values.states.includes(v));
    if (state) {
      comman = true;
    }
    
    if (comman) {
      const shippingAddress = this.props.addNew
        ? [...this.props.shippingAddress, values]
        : values;
      this.props.addShippingAddressRequest({
        shippingAddress,
        uid: this.props.user.data.uid
      });
    } else {
      this.setState({ response: "We can not process your order. Sorry!" });
    }
  };

  /**Renders the field of Shipping Address Component */
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
    const { addNew, shippingAddress } = this.props;
    const { isLoading } = this.props.additionalInfo;
    return (
      <>
        {isLoading ? (
          <div className="login-loader">
            <div>Saving your Address...</div>
            <div>Hang tight</div>
            <div className="loader" />
          </div>
        ) : (
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
                    <div className="text-danger">{this.state.response}</div>
                    {/* <div className="switch_title">
                  <h4> Send me SMS Delivery Updates </h4>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slid round" />
                  </label>
                </div> */}
                    {addNew && (
                      <button
                        className="underline_button"
                        onClick={this.props.toggleAddAddress}
                      >
                        Cancel
                      </button>
                    )}
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
        )}
      </>
    );
  }
}

/**Validates the values from redux form before submitting
 * @param {Object} values values from the redux form
 * @returns {Object} error message for respective fields in an object with field as properties
 */
const validate = values => {
  const error = {};
  const regex = /(\d{5}([\-]\d{4})?)/;

  if (!regex.test(values.zipcode)) {
    error.zipcode = "Invalid ZIP code";
  }

  for (let value of fields) {
    if (!values[value.name] && value.name !== "type") {
      error[value.name] = "Required Field";
    }
  }
  if (!values.zipcode) {
    error.zipcode = "Required Field";
  }
  return error;
};

const mapStateToProps = ({
  user,
  profile: { userProfile, additionalInfo }
}) => ({
  user,
  userProfile,
  additionalInfo
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

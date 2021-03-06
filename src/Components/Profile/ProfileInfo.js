import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import ProfileField from "../Generic/ProfileField";
import { profileInfoFields as fields } from "../../constants/profile";
import { validatePhone } from "../../utils/validate";

/**Component for showing Profile Information and Editing them */
class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditProfile: false
    };
  }

  /**To save information of user
   * @param {Object} values values from profile info form
   */
  handleSaveProfile = values => {
    const { uid, email } = this.props.userInfo;
    this.props.onUpdateProfileRequest({ ...values, email, uid });
  };

  /**Opens the form where user can edit their profile information */
  openEditProfile = () => this.setState({ showEditProfile: true });

  /**Closes the edit profile form and resets the value */
  cancelEditProfile = () => {
    this.setState({ showEditProfile: false });
    this.props.reset();
  };
  componentDidMount() {
    this.props.initialize({ ...this.props.userProfile.data });
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.userProfile.isSuccess &&
      prevProps.userProfile.isSuccess !== this.props.userProfile.isSuccess
    ) {
      this.cancelEditProfile();
    }
    if (
      prevProps.userProfile.data.firstName !==
      this.props.userProfile.data.firstName
    ) {
      this.props.initialize({ ...this.props.userProfile.data });
    }
  }
  /** Renders all the fields for Profile form*/
  renderFields = () =>
    fields.map(({ name, placeholder, type }) => (
      <Field
        component={ProfileField}
        name={name}
        label={placeholder}
        type={type}
        key={name}
      />
    ));
  render() {
    const { showEditProfile } = this.state;
    const {
      userInfo: { email },
      userProfile: {
        data: { firstName, lastName, phone, dateOfBirth },
        isLoading,
        isError,
        message
      }
    } = this.props;
    return (
      <div className="profile_module">
        {!showEditProfile ? (
          <>
            <h3>Profile</h3>
            {firstName && <p>{`${firstName} ${lastName}`}</p>}
            <p>{email}</p>
            {phone && <p>{phone}</p>}
            <p>
              {dateOfBirth &&
                new Date(dateOfBirth.seconds * 1000).toLocaleDateString()}
            </p>
            <Link to="#" onClick={this.openEditProfile}>
              edit
            </Link>
          </>
        ) : (
          <>
            <form>
              {this.renderFields()}
              <button
                onClick={this.props.handleSubmit(this.handleSaveProfile)}
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
              <Link to="#" onClick={this.cancelEditProfile}>
                Cancel
              </Link>
            </form>
            {isError && message && (
              <div className="server_error">{message}</div>
            )}
          </>
        )}
      </div>
    );
  }
}
const validate = values => {
  const error = {};
  if (!validatePhone(values.phone)) {
    error.phone = "Phone number format is not valid";
  }
  for (let value of fields) {
    if (!values[value.name]) {
      error[value.name] = "Required Field";
    }
  }
  return error;
};

export default reduxForm({
  form: "profileInfoForm",
  validate,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(ProfileInfo);

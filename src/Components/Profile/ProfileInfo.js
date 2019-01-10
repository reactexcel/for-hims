import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import ProfileField from "./ProfileField";
import { connect } from "react-redux";

const fields = [
  { name: "firstName", placeholder: "First Legal Name", type: "text" },
  { name: "lastName", placeholder: "Last Legal Name", type: "text" },
  { name: "phone", placeholder: "Phone", type: "phone" }
];

class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditProfile: false
    };
  }
  toggleEditProfile = () =>
    this.setState(prevState => ({
      showEditProfile: !prevState.showEditProfile
    }));
  cancelEditProfile = () => {
    this.props.reset();
    this.toggleEditProfile();
  };
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

    return (
      <div className="profile_module">
        {!showEditProfile ? (
          <>
            <h3>Profile</h3>
            <p>
              {this.props.profileInfoForm && this.props.profileInfoForm.values
                ? `${this.props.profileInfoForm.values.firstName} ${
                    this.props.profileInfoForm.values.lastName
                  }`
                : "Javed Bloch"}{" "}
              <br /> d.designing@gmail.com <br />{" "}
              {this.props.profileInfoForm && this.props.profileInfoForm.values
                ? this.props.profileInfoForm.values.phone
                : "234-234-2344"}{" "}
              <br /> 03-28-1985
            </p>
            <Link to="#" onClick={this.toggleEditProfile}>
              edit
            </Link>
          </>
        ) : (
          <form className="profile_form">
            {this.renderFields()}
            <button onClick={this.toggleEditProfile}>Save Changes</button>
            <Link to="#" onClick={this.cancelEditProfile}>
              Cancel
            </Link>
          </form>
        )}
      </div>
    );
  }
}
const validate = values => {
  const error = {};

  for (let value of fields) {
    if (!values[value.name]) {
      error[value.name] = "Required Field";
    }
  }
  return error;
};

const mapStateToProps = ({ form: { profileInfoForm } }) => ({
  profileInfoForm
});

export default reduxForm({ form: "profileInfoForm", validate })(
  connect(mapStateToProps)(ProfileInfo)
);
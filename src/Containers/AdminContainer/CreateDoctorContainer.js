import React from "react";
import CreateDoctor from "../../Components/Admin/CreateDoctor";
import { connect } from "react-redux";
import { signupRequest } from "../../actions";
import * as ROLES from "../../constants/roles";
function CreateDoctorContainer(props) {
  function onSubmitDocotorDetails(values) {
    const role = ROLES.DOCTOR;
    props.signupRequest({ ...values, role });
  }
  return <CreateDoctor onSubmitDocotorDetails={onSubmitDocotorDetails} />;
}
export default connect(
  null,
  { signupRequest }
)(CreateDoctorContainer);

import React, { useEffect } from "react";
import CreateDoctor from "../../Components/Admin/CreateDoctor";
import { connect } from "react-redux";
import { createUserByAdminRequest } from "../../actions";
import * as ROLES from "../../constants/roles";
function CreateDoctorContainer(props) {
  const onSubmitDocotorDetails = values => {
    const role = ROLES.DOCTOR;
    props.createUserByAdminRequest({ ...values, role });
  };
  // useEffect(()=>{},[props.])
  return <CreateDoctor onSubmitDocotorDetails={onSubmitDocotorDetails} />;
}
const mapStateToProps = ({}) => ({});
export default connect(
  null,
  { createUserByAdminRequest }
)(CreateDoctorContainer);

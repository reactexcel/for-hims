import React from "react";
import CreateDoctor from "../../Components/Admin/CreateDoctor";
import { connect } from "react-redux";
import { createUserByAdminRequest } from "../../actions";
import * as ROLES from "../../constants/roles";
import Header from "../../Components/Generic/Header";
import Footer from "../../Components/Generic/Footer";
import requireAdmin from "../../hoc/requireAdmin";

/**
 * Parent Component for Create Doctor component
 */
function CreateDoctorContainer(props) {
  /**To submit Doctor details to create their account
   * @param values values from redux-form
   */
  const onSubmitDocotorDetails = values => {
    console.log(values,'assasasasa')
    const role = ROLES.DOCTOR;
    props.createUserByAdminRequest({ ...values, role });
  };
  return (
    <>
      <Header />
      <CreateDoctor
        createUser={props.createuser}
        onSubmitDocotorDetails={onSubmitDocotorDetails}
      />
      <Footer />
    </>
  );
}
const mapStateToProps = ({ createuser }) => ({ createuser });
export default requireAdmin(
  connect(
    mapStateToProps,
    { createUserByAdminRequest }
  )(CreateDoctorContainer)
);

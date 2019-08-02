import React, { Component } from "react";
import moment from "moment";
import ReactModal from "react-modal";
import ErrorText from "../Generic/ErrorText";
import * as ROLES from "../../constants/roles";

/**UI component for Customer Orders where Doctor will review the customer
 * information
 */
export default class CustomerOrders extends Component {
  render() {
    const {
      isLoading,
      data: { firstName, lastName, dateOfBirth, approvalStatus }
    } = this.props.customerDetails;
    const {
      isError,
      message,
      isLoading: approvalLoading
    } = this.props.additionalInfo;
    const {
      deny,
      approve,
      handleCommentChange,
      doctorComment,
      error,
      onActionClick,
      closeModal,
      handleSubmit,
      role,
      doctorName
    } = this.props;
    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <div className="login-loader">
              <div>Loading Customer Information...</div>
              <div>Hang tight</div>
              <div className="loader" />
            </div>
          </div>
        ) : (
          <div className="container">
            <h2>Customer's Information</h2>
            <div className="profile_module">
              <div className="customer-info">
                <span>{`${firstName?firstName:'' } ${lastName?lastName:'' }`}</span>
              </div>
              <div className="customer-info">
                <span>
                  {dateOfBirth &&
                    moment(dateOfBirth.seconds * 1000).format("LL")}
                </span>
              </div>
              <div className="customer-info">
                <span>Approval Status : </span>
                <span>{approvalStatus}</span>
              </div>
              {role === ROLES.ADMIN && (
                <div className="customer-info">
                  <span>Assigned To : </span>
                  <span>{doctorName}</span>
                </div>
              )}
            </div>
            {this.props.renderQuestions()}
            {approvalStatus === "Waiting" && role === ROLES.DOCTOR && (
              <div className="review-customer_button">
                <button data-action="approve" onClick={onActionClick}>
                  Approve
                </button>
                <button data-action="deny" onClick={onActionClick}>
                  Deny
                </button>
              </div>
            )}
            <ReactModal
              isOpen={deny || approve}
              contentLabel="MessageModal"
              closeTimeoutMS={400}
              overlayClassName="ReactModal__Overlay"
              className="ReactModal__Content"
              ariaHideApp={false}
            >
              {approvalLoading ? (
                <div className="login-loader">
                  <div>Updating Approval...</div>
                  <div>Hang tight</div>
                  <div className="loader" />
                </div>
              ) : (
                <div className="message-text-box">
                  {deny && (
                    <>
                      <h4>Message</h4>
                      <input
                        type="text"
                        name="doctorComment"
                        value={doctorComment}
                        placeholder="Enter your message here..."
                        className={error.message ? "error" : ""}
                        onChange={handleCommentChange}
                      />
                      {error.message && <ErrorText text={error.message} />}
                    </>
                  )}
                  {approve && (
                    <>
                      <h4>Confirmation</h4>
                      <div>
                        Are you sure that you want to approve medication for
                        this customer?
                      </div>
                    </>
                  )}
                  <div className="message-text-box--actions">
                    <div
                      className="submit-now"
                      data-action={deny ? "deny" : "approve"}
                      onClick={handleSubmit}
                    >
                      {deny && " Submit Now"} {approve && "Yes"}
                    </div>
                    <div
                      data-action={deny ? "den" : "approve"}
                      onClick={closeModal}
                    >
                      {deny && "Cancel"} {approve && "No"}
                    </div>
                  </div>
                  {isError && message && (
                    <div className="server_error">{message}</div>
                  )}
                </div>
              )}
            </ReactModal>
          </div>
        )}
      </>
    );
  }
}

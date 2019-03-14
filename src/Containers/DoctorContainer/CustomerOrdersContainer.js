import React, { Component } from "react";
import CustomerOrders from "../../Components/Doctors/CustomerOrders";
import { connect } from "react-redux";
import requireNotCustomer from "../../hoc/requireNotCustomer";
import { withRouter } from "react-router-dom";
import { findIndex } from "lodash";
import {
  getCustomerDetailRequest,
  updateAppointmentRequest,
  sendMessageRequest,
  chargeCustomerAfterApprovalRequest
} from "../../actions";
import { validateMessage } from "../../utils/validate";
/**Parent Component for CustomerOrders */
class CustomerOrdersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorComment: "",
      deny: false,
      error: {},
      approve: false
    };
  }
  componentDidMount() {
    if (this.props.history.location.state === undefined) {
      this.props.history.goBack();
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.additionalInfo.isSuccess &&
      prevProps.additionalInfo.isSuccess !== this.props.additionalInfo.isSuccess
    ) {
      const { customerId, orderId, cardId } = this.props.history.location.state;
      this.props.chargeCustomerAfterApprovalRequest({
        uid: customerId,
        orderId,
        cardId
      });
      this.props.history.goBack();
    }
  }
  /**Handles the text change of comment */
  handleCommentChange = e => this.setState({ [e.target.name]: e.target.value });

  /**Shows a modal with text box when clicked on deny button or ask for
   * Confirmation if clicked on approval */
  onActionClick = event => {
    //Getting the action through data attributes
    const { action } = event.currentTarget.dataset;
    this.setState({ [action]: true });
  };
  closeModal = event => {
    //Getting the action through data attributes
    const { action } = event.currentTarget.dataset;
    this.setState({ [action]: false });
  };

  /**Updating the approval status of customer and also submitting reason
   *  if approval is denied */
  handleSubmit = event => {
    //Getting the action through data attributes
    const { action } = event.currentTarget.dataset;
    const { uid } = this.props.customerDetails.data;
    const { doctorComment } = this.state;
    const { role } = this.props.userProfile.data;
    let status;
    if (action === "approve") {
      status = "Approved";
      this.props.updateAppointmentRequest({ uid, status, role });
    } else if (action === "deny") {
      const error = validateMessage(this.state.doctorComment);
      this.setState({ error });
      if (!Object.keys(error).length) {
        status = "Denied";
        this.props.updateAppointmentRequest({ uid, status, role });
        this.props.sendMessageRequest({ uid, message: doctorComment });
      }
      this.setState({ doctorComment: "" });
    }
  };

  /**Renders question and answers of customer */
  renderQuestions = () => {
    const { data } = this.props.questions;
    const { answers } = this.props.customerDetails.data;
    const { firstName, lastName } = this.props.customerDetails.data;
    const customerName = `${firstName} ${lastName}`;
    if (data.length) {
      return data.map((question, index) => (
        <div className="question-container" key={question.id}>
          <div className="visit_question_left">
            <div className="question-nomber">
              {`${index + 1} of ${data.length}`}
            </div>
            <div className="question-text">
              {`${index + 1}. ${question.data().title}`}
            </div>
          </div>
          <div className="clearfix" />
          <div className="visit_question_right">
            <small className="gillin_title">{customerName} </small>
            {question.data().type === "checkbox" && (
              <small className="apply_title">* select all that apply *</small>
            )}
            {question.data().type !== "text" && (
              <ul className="tab_question">
                {question.data().choices.map((choice, choiceIndex) => {
                  let isSolution =
                    answers[0] !== undefined
                      ? findIndex(answers, value => {
                          return value.questionUid === question.id;
                        })
                      : null;
                  let selected =
                    isSolution !== null && isSolution !== -1
                      ? question.data().type === "radio"
                        ? answers[isSolution].choiceId === choiceIndex
                          ? true
                          : false
                        : answers[isSolution].choiceId.includes(choiceIndex)
                        ? true
                        : false
                      : false;
                  return (
                    <li
                      key={question.id + choiceIndex}
                      className={`${
                        selected ? "selected-answer" : ""
                      } customer-answer`}
                    >
                      {choice.label}
                    </li>
                  );
                })}
              </ul>
            )}
            {question.data().type === "text" && (
              <div className="question_textarea">
                <textarea
                  disabled
                  readOnly
                  name={question.id}
                  value={
                    answers[
                      findIndex(answers, {
                        questionUid: question.id
                      })
                    ].value
                  }
                />
              </div>
            )}
          </div>
        </div>
      ));
    }
  };
  render() {
    const { customerDetails, additionalInfo } = this.props;
    const { deny, doctorComment, error, approve } = this.state;
    const {
      data: { role }
    } = this.props.userProfile;

    return (
      <CustomerOrders
        renderQuestions={this.renderQuestions}
        customerDetails={customerDetails}
        doctorComment={doctorComment}
        handleCommentChange={this.handleCommentChange}
        deny={deny}
        approve={approve}
        onActionClick={this.onActionClick}
        error={error}
        closeModal={this.closeModal}
        handleSubmit={this.handleSubmit}
        additionalInfo={additionalInfo}
        role={role}
      />
    );
  }
}
const mapStateToProps = ({
  customerDetails,
  questions,
  profile: { userProfile, additionalInfo }
}) => ({
  customerDetails,
  questions,
  userProfile,
  additionalInfo
});
export default requireNotCustomer(
  connect(
    mapStateToProps,
    {
      getCustomerDetailRequest,
      updateAppointmentRequest,
      sendMessageRequest,
      chargeCustomerAfterApprovalRequest
    }
  )(withRouter(CustomerOrdersContainer))
);

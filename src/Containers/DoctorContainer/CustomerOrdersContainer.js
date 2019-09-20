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
    const { uid, email, dateOfBirth } = this.props.customerDetails.data;
    const order_id = this.props.match.params.uid;
    const { doctorComment } = this.state;
    const { role } = this.props.userProfile.data;
    let DOB = new Date(dateOfBirth.seconds * 1000);
    let status;
    if (action === "approve") {
      status = "Approved";
      this.props.updateAppointmentRequest({
        uid,
        status,
        role,
        email,
        order_id,
        DOB
      });
    } else if (action === "deny") {
      const error = validateMessage(this.state.doctorComment);
      this.setState({ error });
      if (!Object.keys(error).length) {
        const messageSendCustomer = {
          messageDoctor: doctorComment,
          doctorRead: true,
          customerRead: false,
          timestamp: new Date(),
          uid: this.state.uid
        };
        status = "Denied";
        this.props.updateAppointmentRequest({
          uid,
          status,
          role,
          email,
          order_id,
          DOB,
          doctorComment
        });
        this.props.sendMessageRequest(messageSendCustomer);
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
    let isSolution, selected, answerChoosed;
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
            <small className="gillin_title">
              {!customerName ? customerName : ""}
            </small>

            {question.data().type !== "text" &&
              question.data().type !== "select" && (
                <ul className="tab_question">
                  {question.data().choices.map((choice, choiceIndex) => {
                    isSolution =
                      answers && answers[0] !== undefined
                        ? findIndex(answers, value => {
                            return value.questionUid === question.id;
                          })
                        : null;
                    selected =
                      isSolution !== null && isSolution !== -1
                        ? question.data().type === "radio"
                          ? answers[isSolution].choiceId === choiceIndex
                            ? true
                            : false
                          : answers[isSolution].choiceId.includes(choiceIndex)
                          ? true
                          : false
                        : false;
                    answerChoosed =
                      isSolution !== null &&
                      isSolution !== -1 &&
                      (question.data().type === "radio" ||
                        question.data().type === "checkbox") &&
                      answers[isSolution].choiceId;
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
            {(question.data().type === "text" ||
              question.data().type === "select") && (
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
            {question.data().hasOwnProperty("children") &&
              question.data().children.map((element, childId) => {
                const condition = type => {
                  switch (type) {
                    case "radio":
                      return (
                        (answerChoosed === 0 ? true : Boolean(answerChoosed)) &&
                        element.selected === answerChoosed
                      );
                    case "checkbox":
                      return (
                        Boolean(answerChoosed) &&
                        answerChoosed.includes(element.selected)
                      );
                    case "text":
                      return (
                        findIndex(answers, {
                          questionUid: question.id
                        }) !== -1 &&
                        Boolean(
                          answers[
                            findIndex(answers, {
                              questionUid: question.id
                            })
                          ].value
                        )
                      );
                  }
                };

                let questionIndex =
                  answers[0] !== undefined
                    ? findIndex(answers, value => {
                        return value.questionUid === question.id;
                      })
                    : null;
                let childIndex = findIndex(answers[questionIndex].children, {
                  childId: childId + 1
                });

                return (
                  <>
                    {element.child.type === "text" &&
                      condition(question.data().type) && (
                        <div
                          className="question-container"
                          key={element.child.title}
                        >
                          <div className="visit_question_left">
                            <div className="question-text">
                              {` ${element.child.title}`}
                            </div>
                          </div>
                          {element.child.type === "text" && (
                            <div className="question_textarea">
                              <textarea
                                name={`${question.id}-${childId + 1}`}
                                value={
                                  answers[questionIndex].children[childIndex]
                                    .value
                                }
                              />
                            </div>
                          )}
                        </div>
                      )}

                    {element.child.type === "radio" &&
                      condition(question.data().type) && (
                        <div
                          className="question-container"
                          key={element.child.title}
                        >
                          <div className="visit_question_left">
                            <div className="question-text">
                              {` ${element.child.title}`}
                            </div>
                          </div>
                          <ul className="tab_question">
                            {question
                              .data()
                              .choices.map((choice, childChoiceIndex) => {
                                let childSelected =
                                  answers[questionIndex].children[childIndex]
                                    .choiceId === childChoiceIndex;

                                return (
                                  <li
                                    key={`${question.id}-${choice.label}`}
                                    className={`${
                                      childSelected ? "selected-answer" : ""
                                    } customer-answer`}
                                  >
                                    {choice.label}
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      )}
                  </>
                );
              })}
          </div>
        </div>
      ));
    }
  };
  render() {
    const { customerDetails, additionalInfo } = this.props;
    const { deny, doctorComment, error, approve } = this.state;
    const doctorName =
      this.props.history.location.state !== undefined &&
      this.props.history.location.state.doctorName;
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
        doctorName={doctorName}
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

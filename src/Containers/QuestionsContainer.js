import React, { Component } from "react";
import Questions from "../Components/Questions";
import { connect } from "react-redux";
import { uniqWith, isEqual, findIndex, sortBy, cloneDeep } from "lodash";
import { submitAnswersRequest } from "../actions";

/**Parent Component for Questions */
class QuestionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      textAnswers: []
    };
  }
  componentDidMount() {
    if (!this.props.questions.data.length) {
      this.props.history.push("/");
    }
    const textAnswers = [];
    const answers = [];
    if (this.props.userProfile.data.answers) {
      this.props.userProfile.data.answers.forEach(answer => {
        if (answer.hasOwnProperty("value")) {
          textAnswers.push(answer);
        } else {
          answers.push(answer);
        }
      });
      this.setState({ answers, textAnswers });
    } else if (this.props.questions.data.length) {
      this.props.questions.data.forEach(question => {
        if (question.data().type === "text") {
          textAnswers.push({
            questionUid: question.id,
            questionId: question.data().id,
            value: question.data().value
          });
        }
      });
      this.setState({ textAnswers });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.questions.isSuccess &&
      prevProps.questions.isSuccess !== this.props.questions.isSuccess
    ) {
      this.props.history.push("/photos");
    }
  }

  /**To Select Answers according to type of question
   * @param {string} questionUid unique id of a question document from firebase
   * @param {number} questionId id of question
   * @param {number} choiceId choice index of answers
   * @param {string} quesType type of question, radio or checkbox
   * @param {boolean | array} children
   */
  selectAnswer = (questionUid, questionId, choiceId, quesType, children) => {
    const answers = cloneDeep(this.state.answers);
    let answer;
    if (answers[0] !== undefined) {
      const existingQuestion =
        findIndex(answers, { questionUid }) === -1 ? false : true;
      const questionIndex = findIndex(answers, { questionUid });
      if (existingQuestion) {
        if (quesType === "radio") {
          answers[questionIndex].choiceId = choiceId;
        } else if (quesType === "checkbox") {
          answers[questionIndex].choiceId.includes(choiceId)
            ? answers[questionIndex].choiceId.splice(
                answers[questionIndex].choiceId.indexOf(choiceId),
                1
              )
            : answers[questionIndex].choiceId.push(choiceId);
        }
      } else {
        answer = {
          questionUid,
          questionId,
          choiceId: quesType === "checkbox" ? [choiceId] : choiceId,
          ...(children && {
            children: children.map((child, childId) => ({
              childId: childId + 1,
              childFor: child.selected,
              ...(child.child.type === "radio" && { choiceId: null }),
              ...(child.child.type === "text" && { value: "" })
            }))
          })
        };
      }
    } else {
      answer = {
        questionUid,
        questionId,
        choiceId: quesType === "checkbox" ? [choiceId] : choiceId,
        ...(children && {
          children: children.map((child, childId) => ({
            childId: childId + 1,
            childFor: child.selected,
            ...(child.child.type === "radio" && { choiceId: null }),
            ...(child.child.type === "text" && { value: "" })
          }))
        })
      };
    }
    if (answer !== undefined) {
      answers.push(answer);
    }
    const uniqAnswers = uniqWith(answers, isEqual);
    this.setState({
      answers: uniqAnswers
    });
  };
  /**To set answers of questions which are of text type
   * @param {string} questionUid unique id of a question document from firebase
   * @param {number} questionId id of question
   */
  setTextQuestion = (questionUid, questionId) => {
    const { textAnswers } = this.state;
    const existingTextQuestion =
      findIndex(textAnswers, { questionUid }) === -1 ? false : true;
    if (!existingTextQuestion) {
      this.setState({
        textAnswers: [
          ...this.state.textAnswers,
          { questionUid, questionId, value: "" }
        ]
      });
    }
  };

  /**Handling change of controlled text answers */
  handleChange = event => {
    let textAnswers = this.state.textAnswers.slice();
    for (let i in textAnswers) {
      if (textAnswers[i].questionUid === event.target.name) {
        textAnswers[i].value = event.target.value;
        this.setState({ textAnswers });
        break;
      }
    }
  };

  handleChildTextChange = event => {
    const {
      target: { name, value }
    } = event;
    const [questionUid, childId] = name.split("-");
    const answers = cloneDeep(this.state.answers);
    for (let i in answers) {
      if (answers[i].questionUid === questionUid) {
        for (let c in answers[i].children) {
          if (answers[i].children[c].childId === Number(childId)) {
            answers[i].children[c].value = value;
            this.setState({ answers });
            break;
          }
        }
      }
    }
  };

  /**Renders all the questions */
  renderQuestions = () => {
    const { data } = this.props.questions;
    const {
      data: { firstName, lastName }
    } = this.props.userProfile;
    const name = `${firstName} ${lastName}`;
    const { answers } = this.state;
    let isSolution, selected, answerChoosed;
    if (data.length) {
      return data.map((question, index) => (
        <>
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
              <small className="gillin_title"> {name ? "" : name} </small>
              {question.data().type === "checkbox" && (
                <small className="apply_title">* select all that apply *</small>
              )}
              {question.data().type !== "text" && (
                <ul className="tab_question">
                  {question.data().choices.map((choice, choiceIndex) => {
                    isSolution =
                      answers[0] !== undefined
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
                        onClick={() =>
                          this.selectAnswer(
                            question.id,
                            question.data().id,
                            choiceIndex,
                            question.data().type,
                            question.data().hasOwnProperty("children") &&
                              question.data().children
                          )
                        }
                        className={selected ? "selected-answer" : ""}
                      >
                        {choice.label}
                      </li>
                    );
                  })}
                </ul>
              )}
              {question.data().type === "text" &&
                this.state.textAnswers.length && (
                  <div className="question_textarea">
                    <textarea
                      onFocus={() => {
                        this.setTextQuestion(question.id, question.data().id);
                      }}
                      onChange={this.handleChange}
                      name={question.id}
                      value={
                        this.state.textAnswers[
                          findIndex(this.state.textAnswers, {
                            questionUid: question.id
                          })
                        ].value
                      }
                    />
                  </div>
                )}
            </div>
          </div>
          {Boolean(answerChoosed) &&
            question.data().hasOwnProperty("children") &&
            (question.data().type === "radio" ||
              question.data().type === "checkbox") &&
            question.data().children.map((element, childId) => {
              return (
                <>
                  {element.child.type === "text" &&
                    (question.data().type === "radio"
                      ? element.selected === answerChoosed
                      : answerChoosed.includes(element.selected)) && (
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
                                this.state.answers[
                                  findIndex(this.state.answers, {
                                    questionUid: question.id
                                  })
                                ].children[
                                  findIndex(this.state.answers.children, {
                                    childId
                                  })
                                ]
                              }
                              onChange={this.handleChildTextChange}
                            />
                          </div>
                        )}
                      </div>
                    )}
                </>
              );
            })}
        </>
      ));
    }
  };

  /**To submit answer of the consumer*/
  submitAnswers = () => {
    const { uid } = this.props;
    const answers = sortBy(
      [...this.state.answers, ...this.state.textAnswers],
      "questionId"
    );
    this.props.submitAnswersRequest({ uid, answers });
  };
  render() {
    const { questions } = this.props;
    return (
      <div>
        <Questions
          questions={questions}
          renderQuestions={this.renderQuestions}
          submitAnswers={this.submitAnswers}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ questions, profile: { userProfile } }) => ({
  questions,
  userProfile
});
export default connect(
  mapStateToProps,
  { submitAnswersRequest }
)(QuestionsContainer);

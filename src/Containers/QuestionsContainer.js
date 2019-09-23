import React, { Component } from "react";
import Questions from "../Components/Questions";
import { connect } from "react-redux";
import { uniqWith, isEqual, findIndex, sortBy, cloneDeep } from "lodash";
import { submitAnswersRequest } from "../actions";
import { countries } from "../constants/questions";

/**Parent Component for Questions */
class QuestionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      textAnswers: [],
      selectTypeAnswers: [],
      currentQuestionIndex: 0
    };
  }
  componentDidMount() {
    if (!this.props.questions.data.length) {
      this.props.history.push("/");
    }
    const textAnswers = [];
    const answers = [];
    const selectTypeAnswers = [];
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
            value: question.data().value,
            ...(question.data().children && {
              children: question.data().children.map((child, childId) => ({
                childId: childId + 1,
                childFor: child.selected,
                ...(child.child.type === "radio" && { choiceId: null }),
                ...(child.child.type === "text" && { value: "" })
              }))
            })
          });
        }
        if (question.data().type === "select") {
          selectTypeAnswers.push({
            questionUid: question.id,
            questionId: question.data().id,
            value: question.data().value || "Afghanistan"
          });
        }
      });
      this.setState({ textAnswers, selectTypeAnswers });
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
          if (answers[questionIndex].choiceId === choiceId) {
            answers[questionIndex].choiceId = null;
          } else {
            answers[questionIndex].choiceId = choiceId;
          }
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

  selectChildAnswer = (questionUid, childId, choiceId) => {
    const answers = cloneDeep(this.state.answers);
    const questionIndex = findIndex(answers, { questionUid });
    if (questionIndex !== -1) {
      const childIndex = findIndex(answers[questionIndex].children, {
        childId
      });
      if (answers[questionIndex].children[childIndex].choiceId === choiceId) {
        answers[questionIndex].children[childIndex].choiceId = null;
      } else {
        answers[questionIndex].children[childIndex].choiceId = choiceId;
      }
      this.setState({ answers });
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

  /**Handling change of children question */
  handleChildTextChange = (event, ans) => {
    const {
      target: { name, value }
    } = event;
    const [questionUid, childId] = name.split("-");
    const answers = cloneDeep(this.state[ans]);
    for (let i in answers) {
      if (answers[i].questionUid === questionUid) {
        for (let c in answers[i].children) {
          if (answers[i].children[c].childId === Number(childId)) {
            answers[i].children[c].value = value;
            this.setState({ [ans]: answers });
            break;
          }
        }
      }
    }
  };

  handleSelectChange = (event, questionUid, questionId) => {
    const {
      target: { value }
    } = event;
    const existingAnswers = findIndex(this.state.selectTypeAnswers, {
      questionUid
    });
    if (existingAnswers !== -1) {
      const selectTypeAnswers = this.state.selectTypeAnswers.map(answer =>
        answer.questionUid === questionUid ? { ...answer, value } : answer
      );
      this.setState({ selectTypeAnswers });
    } else {
      this.setState({
        selectTypeAnswers: [
          ...this.state.selectTypeAnswers,
          { questionUid, questionId, value }
        ]
      });
    }
  };

  /**Renders all the questions */
  renderQuestions = () => {
    const { data } = this.props.questions;
    const {
      data: { firstName, lastName }
    } = this.props.userProfile;
    const name = `${firstName} ${lastName}`;
    const { answers, currentQuestionIndex } = this.state;
    let isSolution, selected, answerChoosed;
    if (data.length) {
      const question = data[currentQuestionIndex],
        index = currentQuestionIndex;
      return (
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
              {question.data().type !== "text" &&
                question.data().type !== "select" && (
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
              {question.data().type === "select" &&
                this.state.selectTypeAnswers.length && (
                  <select
                    value={
                      this.state.selectTypeAnswers[
                        findIndex(this.state.selectTypeAnswers, {
                          questionUid: question.id
                        })
                      ].value
                    }
                    onChange={e =>
                      this.handleSelectChange(
                        e,
                        question.id,
                        question.data().id
                      )
                    }
                  >
                    {countries.map(({ name, code }) => (
                      <option value={name} key={code}>
                        {name}
                      </option>
                    ))}
                  </select>
                )}
            </div>
          </div>
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
                      findIndex(this.state.textAnswers, {
                        questionUid: question.id
                      }) !== -1 &&
                      Boolean(
                        this.state.textAnswers[
                          findIndex(this.state.textAnswers, {
                            questionUid: question.id
                          })
                        ].value
                      )
                    );
                }
              };
              const ans =
                question.data().type === "text" ? "textAnswers" : "answers";

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
                                this.state[ans][
                                  findIndex(this.state[ans], {
                                    questionUid: question.id
                                  })
                                ].children[
                                  findIndex(
                                    this.state[ans][
                                      findIndex(this.state[ans], {
                                        questionUid: question.id
                                      })
                                    ].children,
                                    {
                                      childId: childId + 1
                                    }
                                  )
                                ].value
                              }
                              onChange={event =>
                                this.handleChildTextChange(event, ans)
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
                              let questionIndex =
                                answers[0] !== undefined
                                  ? findIndex(answers, value => {
                                      return value.questionUid === question.id;
                                    })
                                  : null;
                              let childIndex = findIndex(
                                answers[questionIndex].children,
                                { childId: childId + 1 }
                              );

                              let childSelected =
                                answers[questionIndex].children[childIndex]
                                  .choiceId === childChoiceIndex;

                              return (
                                <li
                                  key={question.id + choice.label}
                                  onClick={() =>
                                    this.selectChildAnswer(
                                      question.id,
                                      childId + 1,
                                      childChoiceIndex
                                    )
                                  }
                                  className={
                                    childSelected ? "selected-answer" : ""
                                  }
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
          <div className="d-flex justify-content-end mb-5">
            {currentQuestionIndex > 0 ? (
              <button
                className="btn btn-dark text-white"
                onClick={() =>
                  this.setState({
                    currentQuestionIndex: currentQuestionIndex - 1
                  })
                }
              >
                PREVIOUS
              </button>
            ) : null}
            {currentQuestionIndex < data.length - 1 ? (
              <button
                className="btn btn-dark text-white ml-2"
                onClick={() =>
                  this.setState({
                    currentQuestionIndex: currentQuestionIndex + 1
                  })
                }
              >
                NEXT
              </button>
            ) : null}
          </div>
        </>
      );
    }
  };

  /**To submit answer of the consumer*/
  submitAnswers = () => {
    const {
      uid,
      questions: { data: questionsData }
    } = this.props;
    const answers = sortBy(
      [
        ...this.state.answers,
        ...this.state.textAnswers,
        ...this.state.selectTypeAnswers
      ],
      "questionId"
    );

    if (answers.length === questionsData.length) {
      this.props.submitAnswersRequest({ uid, answers });
    }
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

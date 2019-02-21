import React, { Component } from "react";
import { Link } from "react-router-dom";
import { uniqWith, isEqual, findIndex } from "lodash";

class Questions extends Component {
  state = {
    answers: [],
    textBox: []
  };
  componentDidMount() {
    if (!this.props.questions.data.length) {
      this.props.history.push("/");
    }
  }

  selectAnswer = (questionUid, questionId, choiceId) => {
    const { answers } = this.state;
    let answer;
    if (answers[0] !== undefined) {
      answers.map((value, index) => {
        if (value.questionUid === questionUid) {
          value.choiceId = choiceId;
        } else {
          answer = { questionUid, questionId, choiceId };
        }
      });
    } else {
      answer = { questionUid, questionId, choiceId };
    }
    if (answer !== undefined) {
      answers.push(answer);
    }
    const uniqSolution = uniqWith(answers, isEqual);
    this.setState({
      answers: uniqSolution
    });
  };
  selectTextAnswer = (questionUid, questionId, text) => {};
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  renderQuestions = () => {
    const { data } = this.props.questions;
    const { answers } = this.state;
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
            <small className="gillin_title">Garrett Gillin </small>
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
                      ? answers[isSolution].choiceId === choiceIndex
                        ? true
                        : false
                      : false;
                  return (
                    <li
                      key={question.id + choiceIndex}
                      onClick={() =>
                        this.selectAnswer(
                          question.id,
                          question.data().id,
                          choiceIndex
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
            {question.data().type === "text" && (
              <div className="question_textarea">
                <textarea />
              </div>
            )}
          </div>
        </div>
      ));
    }
  };
  render() {
    const { answers, textBoxAnswer } = this.state;
    console.log(this.state.answers, "+++");
    return (
      <>
        <div className="emr_header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <h2 className="black">Bailey Health of Pennsylvania P.C.</h2>
              </div>
              <div className="clearfix" />

              <ul className="tab_header questions_header_tab">
                <li className="active1">
                  <i className="fa fa-check-circle" />
                  <Link to="/informed-consent"> Informed Consent </Link>
                </li>
                <li className="active2">
                  <Link to="/questions"> Questions </Link>
                </li>
                <li>
                  <Link to="/photos"> Photos </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2"> </div>

            <div className="col-xs-12 col-sm-12 col-md-8">
              <div className="question-detail">
                {this.renderQuestions()}
                <p align="center">
                  <Link to="/photos" className="consent_next_btn">
                    Continue
                  </Link>
                </p>
                <p align="center">
                  <Link to="/photos" className="next-question_btn">
                    Next Question
                  </Link>
                </p>
              </div>
              <h1>&nbsp; </h1>
              <p align="center">
                Powered by Hims <br />
                <Link to="#" className="link">
                  Terms and Conditions
                </Link>
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-2"> </div>
          </div>
        </div>

        <div className="scrollup" to="#">
          <i className="fa fa-angle-double-up" aria-hidden="true" />
        </div>
      </>
    );
  }
}

export default Questions;

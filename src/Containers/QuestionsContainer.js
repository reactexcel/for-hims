import React, { Component } from "react";
import Questions from "../Components/Questions";
import { connect } from "react-redux";

class QuestionsContainer extends Component {
  render() {
    const { questions } = this.props;
    return (
      <div>
        <Questions questions={questions} history={this.props.history} />
      </div>
    );
  }
}
const mapStateToProps = ({ questions }) => ({
  questions
});
export default connect(mapStateToProps)(QuestionsContainer);

import React, { Component } from "react";
import Gender from "../Components/Gender";

class GenderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "male"
    };
  }
  onGenderChange = e => this.setState({ gender: e.currentTarget.value });
  render() {
    return (
      <Gender gender={this.state.gender} onGenderChange={this.onGenderChange} />
    );
  }
}

export default GenderContainer;

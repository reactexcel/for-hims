import React, { Component } from "react";
import Gender from "../Components/Gender";
import { connect } from "react-redux";
import { saveGenderRequest } from "../actions";

class GenderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "male"
    };
  }

  componentDidMount(){
    if(this.props.userProfile.data.gender){
      this.props.history.push("/")
    }
  }

  onGenderChange = e => this.setState({ gender: e.currentTarget.value });

  saveGender = () => {
    const { uid } = this.props;
    const { gender } = this.state;
    this.props.saveGenderRequest({ uid, gender });
    this.props.history.push("/informed-consent");
  };

  render() {
    return (
      <Gender
        gender={this.state.gender}
        onGenderChange={this.onGenderChange}
        saveGender={this.saveGender}
      />
    );
  }
}
const mapStateToProps = ({ profile: { userProfile } }) => ({ userProfile });

export default connect(
  mapStateToProps,
  { saveGenderRequest }
)(GenderContainer);

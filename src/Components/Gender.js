import React, { Component } from "react";
import { Link } from "react-router-dom";
class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "male"
    };
  }
  onGenderChange = e => this.setState({ gender: e.currentTarget.value });
  render() {
    console.log(this.state.gender,'asd')
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-1"> </div>
          <div className="col-xs-12 col-sm-12 col-md-10">
            <div className="gender-container">
              <h2> What is your gender?</h2>
              <div className="clearfix" />
              <div className="male_box">
                <input
                  id="tab1"
                  type="radio"
                  name="tabs"
                  value="male"
                  checked={"male" === this.state.gender}
                  onChange={this.onGenderChange}
                />
                <label for="tab1" className="man-silhouette">
                  Male
                </label>
                <input
                  id="tab2"
                  type="radio"
                  name="tabs"
                  value="female"
                  checked={"female" === this.state.gender}
                  onChange={this.onGenderChange}
                />
                <label for="tab2" className="woman-silhouette">
                  Female
                </label>
              </div>
              <div className="clearfix" />
              <div className="back-btn">
                <Link to="/">Close Visit</Link>
              </div>
              <div className="confirm-gender">
                <Link to="/informed-consent">Confirm</Link>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-1"> </div>
        </div>
      </div>
    );
  }
}

export default Gender;

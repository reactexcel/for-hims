import React, { Component } from "react";
import { Link } from "react-router-dom";
class Gender extends Component {
  render() {
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
                  checked={"male" === this.props.gender}
                  onChange={this.props.onGenderChange}
                />
                <label for="tab1" className="man-silhouette">
                  Male
                </label>
                <input
                  id="tab2"
                  type="radio"
                  name="tabs"
                  value="female"
                  checked={"female" === this.props.gender}
                  onChange={this.props.onGenderChange}
                />
                <label for="tab2" className="woman-silhouette">
                  Female
                </label>
              </div>
              <div className="clearfix" />
              <div className="back-btn">
                <Link to="/">Close Visit</Link>
              </div>
              <div className="confirm-gender" onClick={this.props.saveGender}>
                Confirm
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

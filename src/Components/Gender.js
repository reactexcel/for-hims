import React, { Component } from "react";
import { Link } from "react-router-dom";
class Gender extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-1"> </div>
          <div class="col-xs-12 col-sm-12 col-md-10">
            <div class="gender-container">
              <h2> What is your gender?</h2>
              <div class="clearfix" />
              <div class="male_box">
                <input id="tab1" type="radio" name="tabs" checked />
                <label for="tab1" class="man-silhouette">
                  Male
                </label>
                <input id="tab2" type="radio" name="tabs" />
                <label for="tab2" class="woman-silhouette">
                  Female
                </label>
              </div>
              <div class="clearfix" />
              <div class="back-btn">Close Visit</div>
              <div class="confirm-gender">
                <Link to="/informed-consent">Confirm</Link>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-1"> </div>
        </div>
      </div>
    );
  }
}

export default Gender;

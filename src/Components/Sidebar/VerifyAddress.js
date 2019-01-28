import React, { Component } from "react";
import { connect } from "react-redux";

class VerifyAddress extends Component {
  static defaultProps = {
    renderNext: () => {}
  };
  render() {
    const {
      data: { shippingAddress }
    } = this.props.userProfile;
    return (
      <div id="mySidenav9">
        <div className="symbols">
          <div className="symbols-title">Shipping</div>
          <ul>
            <li className="symbols1"> </li>
            <li className="symbols2"> </li>
            <li className="symbols3 active"> </li>
            <li className="symbols4"> </li>
            <li className="symbols5"> </li>
          </ul>
        </div>
        <div className="verify_address_box">
          <h3> Verify your address </h3>
          <blockquote className="select_no">
            <input type="radio" /> <strong>Original address:</strong> <br />
            {shippingAddress.street} <br /> {shippingAddress.states} <br />
            {shippingAddress.zipcode}
            <br /> USA
          </blockquote>
          <blockquote className="select_yes">
            <input type="radio" checked /> <strong>Suggested address:</strong>
            <br /> {shippingAddress.street} <br /> {shippingAddress.states}{" "}
            <br /> {shippingAddress.zipcode}   <br />
            USA
          </blockquote>
          <a href="#" className="read">
            edit address
          </a>
        </div>
        <button
          tabIndex="0"
          type="button"
          className="login_btn"
          onClick={this.props.renderNext}
        >
          CONFIRM
        </button>
      </div>
    );
  }
}
const mapStateToProps = ({ profile: { userProfile } }) => ({ userProfile });
export default connect(mapStateToProps)(VerifyAddress);

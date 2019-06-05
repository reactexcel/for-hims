import React, { Component } from "react";
import Header from "../Components/Generic/Header";
import Footer from "../Components/Generic/Footer";
import "../assets/css/contactUs.scss";
import { connect } from "react-redux";
import { emailSendAdminRequest } from "../actions";

class ContactUs extends Component {
  state = {
    to:"admin@noleuderm.com"
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.emailSendAdminRequest(this.state);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="contact-us-container">
          <h2>Contact Us</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="fieldName">Name</div>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
              required
            />
            <div className="fieldName">Email</div>
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              required
            />
            <div className="fieldName">Subject</div>
            <input
              type="text"
              placeholder="Enter Your Subject"
              onChange={this.handleChange}
              name="subject"
              value={this.state.subject}
              required
            />
            <div className="fieldName">Message</div>
            <textarea
              rows="8"
              cols="50"
              placeholder="Enter Message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />
            <input type="submit" className="contact-btn" value="Send Message" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = ({ profile: { userProfile } }) => ({
  userProfile
});

export default connect(
  mapStateToProps,
  { emailSendAdminRequest }
)(ContactUs);

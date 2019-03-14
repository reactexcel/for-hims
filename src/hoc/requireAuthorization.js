import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

/**Higher Order Component to authorize a User */
const requireAuthorization = condition => WrappedComponent => {
  class Authorization extends Component {
    componentDidMount() {
      const { role } = this.props.userProfile.data;
      if (!condition(role)) {
        this.props.history.goBack();
      }
    }
    render() {
      const {
        userProfile: {
          data: { role }
        }
      } = this.props;
      return condition(role) ? <WrappedComponent /> : null;
    }
  }
  const mapStateToProps = ({ profile: { userProfile } }) => ({ userProfile });
  return connect(mapStateToProps)(withRouter(Authorization));
};
export default requireAuthorization;

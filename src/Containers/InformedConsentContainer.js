import React, { Component } from "react";
import InformedConsent from "../Components/InformedConsent";
import { connect } from "react-redux";
import { savingConsentRequest } from "../actions";

class InformedConsentContainer extends Component {
  onSavingConsentRequest = () => {
    const { uid } = this.props;
    this.props.savingConsentRequest({ uid });
  };
  render() {
    const { userProfile } = this.props;
    return (
      <div>
        <InformedConsent
          userProfile={userProfile}
          onSavingConsentRequest={this.onSavingConsentRequest}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ profile: { userProfile } }) => ({ userProfile });
export default connect(
  mapStateToProps,
  { savingConsentRequest }
)(InformedConsentContainer);

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
    const { userProfile,additionalInfo } = this.props;
    return (
      <div>
        <InformedConsent
          userProfile={userProfile}
          additionalInfo={additionalInfo}
          onSavingConsentRequest={this.onSavingConsentRequest}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ profile: { userProfile, additionalInfo } }) => ({
  userProfile,
  additionalInfo
});
export default connect(
  mapStateToProps,
  { savingConsentRequest }
)(InformedConsentContainer);

import React, { Component } from "react";
import { Link } from "react-router-dom";
class ActionItems extends Component {
  render() {
    return (
      <div id="mySidenav10">
        <div className="action-section">
          <h3>
            Action Items{" "}
            <i className="fa fa-close" onClick={this.props.closeActionItems} />
          </h3>
          <Link to="/gender">
            <div className="action-items_record">
              <h4> Pending Medical Consultation</h4>
              We cannot process order #W1HQD3CC until you complete your medical
              consultation
            </div>
          </Link>

          <div className="action-items_record">
            <h4>
              <Link to="action-required.html"> Action Required </Link>
            </h4>
            <Link to="action-required.html">
              Your photo didn't meet our criteria. Please upload the appropriate
              photo.
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ActionItems;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Learn extends Component {
  render() {
    return (
      <>
        <div className="profile_menu_box">
          <ul className="profile_menu">
            <li>
              <Link to="#">Savoir Faire</Link>
            </li>
            <li>
              <Link to="#">The Science</Link>
            </li>
            <li>
              <Link to="#">Purpose</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Reviews</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

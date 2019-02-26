import React, { Component } from "react";
import { Link } from "react-router-dom";
class Shop extends Component {
  render() {
    return (
      <>
        <div className="profile_menu_box">
          <ul className="profile_menu">
            <li>
              <Link to="#">Noleuderm Kit (Light + Lotion)</Link>
            </li>
            <li>
              <Link to="#">Noleuderm Lotion</Link>
            </li>
            <li>
              <Link to="#">Noleuderm Light</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Shop;

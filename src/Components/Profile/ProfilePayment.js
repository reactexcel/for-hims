import React from "react";
import {Link} from 'react-router-dom';
export default function ProfilePayment() {
  return (
    <div className="profile_module">
      <h3>Payment Methods</h3>
      <form>
        <input
          type="text"
          className="card"
          name="firstName"
          value=""
          autoComplete="true"
          placeholder="Card number"
        />
        <input
          type="text"
          className="cvc"
          value=""
          autoComplete="true"
          placeholder="MM / YY / CVC"
        />
        <button type="button">Add New Payment Method</button>
      </form>
      <Link to="#">Cancel</Link>
    </div>
  );
}

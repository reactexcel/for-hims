import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="profile_section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="profile_module">
                  <h3>Profile</h3>
                  <p>
                    Javed Bloch <br /> d.designing@gmail.com <br /> 234-234-2344{" "}
                    <br /> 03-28-1985
                  </p>
                  <Link to="#">edit</Link>
                </div>

                <div className="profile_module">
                  <h3>Prescriptions</h3>
                  <p> There are no prescriptions. </p>
                </div>

                <div className="profile_module">
                  <h3>Password</h3>
                  <form>
                    <input type="password" placeholder="Old Password" />
                    <input type="password" placeholder="New Password" />
                    <input
                      type="password"
                      placeholder="Re-enter new password"
                    />
                    <button>Reset Password</button>
                  </form>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="profile_module">
                  <h3>Shipping Addresses</h3>
                  <p>
                    1069 N Bodine St
                    <br /> Philadelphia, PA
                    <br /> 19123
                    <br /> USA
                  </p>
                  <Link to="#">edit</Link>
                </div>

                <div className="profile_module">
                  <h3>Payment Methods</h3>
                  <form>
                    <input
                      type="text"
                      className="card"
                      name="firstName"
                      value=""
                      autocomplete="true"
                      placeholder="Card number"
                    />
                    <input
                      type="text"
                      className="cvc"
                      value=""
                      autocomplete="true"
                      placeholder="MM / YY / CVC"
                    />
                    <button type="button">Add New Payment Method</button>
                  </form>
                  <Link to="#">Cancel</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </>
    );
  }
}

export default Profile;

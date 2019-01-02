import React, { Component } from "react";
import legitscript_logo from "../../assets/images/legitscript_logo.png";
import bbb_logo from "../../assets/images/bbb_logo.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  scrollToTop = () => {
    if (window.pageYOffset) {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  render() {
    return (
      <>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <h4 className="pt2">Have a question?</h4>
                <ul className="footer_ul_amrc">
                  <li>
                    <Link to="#">Help</Link>
                  </li>
                  <li>
                    <a href="mailto:contact@forhims.com">contact@forhims.com</a>
                  </li>
                </ul>

                <h5>&nbsp; </h5>

                <h4 className="pt2">Press inquiries?</h4>
                <ul className="footer_ul_amrc">
                  <li>
                    <a href="mailto:press@forhims.com">press@forhims.com</a>
                  </li>
                </ul>
              </div>

              <div className="col-xs-12 col-sm-2 col-md-2">
                <h4 className="pt2">Shop</h4>

                <ul className="footer_ul_amrc">
                  <li>
                    <Link to="#">Hair</Link>
                  </li>
                  <li>
                    <Link to="#">Skin</Link>
                  </li>
                  <li>
                    <Link to="#">Sex</Link>
                  </li>
                  <li>
                    <Link to="#">Mouth</Link>
                  </li>
                  <li>
                    <Link to="#">Vitals</Link>
                  </li>
                  <li>
                    <Link to="#">Merch</Link>
                  </li>
                </ul>
              </div>

              <div className="col-xs-12 col-sm-2 col-md-2">
                <h4 className="pt2">Learn</h4>
                <ul className="footer_ul_amrc">
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

              <div className="col-xs-12 col-sm-2 col-md-2">
                <h4 className="pt2">Guides</h4>
                <ul className="footer_ul_amrc">
                  <li>
                    <Link to="#">Help</Link>
                  </li>
                  <li>
                    <Link to="#">Treatment Plans</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container logo_footer">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <Link to="#">
                  <img src={legitscript_logo} alt="LegitScript Logo" />
                </Link>
                &nbsp;
                <Link to="#">
                  <img src={bbb_logo} alt="BBB logo" />
                </Link>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6">
                <ul className="social_icons">
                  <li>
                    <Link to="#" className="fa fa-facebook" />
                  </li>
                  <li>
                    <Link to="#" className="fa fa-twitter" />
                  </li>
                  <li>
                    <Link to="#" className="fa fa-instagram" />
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                <h5 className="footer_message">
                  *all photos are models and not actual patients. <br />
                  If you are interested in a prescription product, Hims will
                  assist in setting up a visit for you with an independent
                  physician who will evaluate whether or not you are an
                  appropriate candidate for the prescription product and if
                  appropriate, may write you a prescription for the product
                  which you can fill at the pharmacy of your choice.
                </h5>

                <ul className="copyright_section">
                  <li>
                    <Link to="#"> Terms & Conditions </Link>
                  </li>
                  <li>
                    <Link to="#"> Privacy Policy </Link>
                  </li>
                  <li> Copyright 2018 HIMS. All rights reserved.</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <div className="scrollup" onClick={this.scrollToTop}>
          <i className="fa fa-angle-double-up" aria-hidden="true" />
        </div>
      </>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROLES from "../constants/roles";
import noleuderm_product from "../assets/images/product.png";
import hims_pdp_sildenafil_img from "../assets/images/hims_pdp_sildenafil_img.jpg";
import hims_pdp_sildenafil_img3 from "../assets/images/hims_pdp_sildenafil_img3.jpg";
import hims_pdp_sildenafil_img4 from "../assets/images/hims_pdp_sildenafil_img4.jpg";
import hims_pdp_sildenafil_img5 from "../assets/images/hims_pdp_sildenafil_img5.jpg";
import hims_pdp_sildenafil_img6 from "../assets/images/hims_pdp_sildenafil_img6.jpg";
import home_bg from "../assets/images/home-bg.png";
import endo1 from "../assets/images/FDACLEARED-white.png";
import endo2 from "../assets/images/hi-res-logo-registered.png";
import endo3 from "../assets/images/umassmedical-vitiligo-logo-white.png";
import uv_light from "../assets/images/UV-light.png";
import before_1 from "../assets/images/before-1.png";
import before_2 from "../assets/images/before-2.png";
import before_3 from "../assets/images/before-3.png";
import before_4 from "../assets/images/before-4.png";
import video_1 from "../assets/images/video-1.png";
import video_2 from "../assets/images/the-science.png";
import { Accordion, Button, Card } from "react-bootstrap";
import cloneDeep from "lodash/cloneDeep";
/**UI Component for Home page */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { showInfo: false, accordion: {} };
  }
  handleClick = e => {
    const clonedState = cloneDeep(this.state);
    for (let i in clonedState.accordion) {
      clonedState.accordion[i] = false;
    }
    clonedState.accordion[e] = !this.state.accordion[e];    
    this.setState({
      ...clonedState
    });
  };
  /**Toggles the information block*/
  toggleInfo = () =>
    this.setState(prevState => ({ showInfo: !prevState.showInfo }));
  render() {
    const { showInfo } = this.state;
    const { onAddProduct, role } = this.props;        
    return (
      <>
        <div className="header_slider">
          <div className="container-fluid">
            <div className="row">
              {/* <div className="col-xs-12 col-sm-12 col-md-2"> </div> */}
              <div className="col-xs-12 col-sm-12 col-md-8 text-center first-home-section ">
                <img src={uv_light} className="uv-light pic" />
                <div className="content heading">
                  <h1 className='treat'>TREAT</h1>
                  <h1 className='treat'>VITILIGO</h1>
                  <p className='header-quotes'>NATURALLY. EFFECTIVE. AT HOME.</p>
                  <div className="description">
                    <p>
                      Clinically Proven, Trusted Worldwide. Phototherapy is the
                      only FDA
                    </p>
                    <p>
                      {" "}
                      cleared treatment for Vitiligo. The Noleuderm System
                      couples a portable,
                    </p>
                    <p>
                      {" "}
                      handheld phototherapy lamp with a specially formulated
                      lotion in order to{" "}
                    </p>
                    <p> ensure an optimal healing process and results. </p>
                  </div>
                  <div className="endorsed">
                    <div>Endorsed By</div>
                    <div className="endorsed-list">
                      <img src={endo1} />
                      <img src={endo2} />
                      <img src={endo3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="baseballcard__container">
                  <div className="baseball-card__inset">
                    <div className="pricing">
                      <h1 className="baseball-card__header">$49</h1>
                      <div>
                        <div className='month'
                          style={{
                            fontSize: "1.3em",
                            marginTop: "10px",
                            fontWeight: "600"
                          }}
                        >
                          MONTH
                        </div>
                        <div className='cancel'
                          style={{
                            fontSize: "12px",
                            color: "#414142",
                            fontWeight: "lighter"
                          }}
                        >
                          cancel anytime
                        </div>
                      </div>
                    </div>
                    {/* {(role === ROLES.CUSTOMER  || role === ROLES.DOCTOR)  && ( */}
                    <Link to="#" className="btn1" onClick={onAddProduct}>
                      START <i class="fa fa-arrow-right" />
                    </Link>
                    {/* )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="before-after">
          <div className="main-heading">Before & After</div>
          <div className ='content-before'>
          <p>
            The Noleuderm System uses the same phototherapy bulbs found in the
            leading
          </p>
          <p className="before-after-content">
            {" "}
            dermatology offices. Achieve in-office results in the comfort of
            your own home.
          </p>
          </div>
          
          <div class="grid-container effect-month view">
            <div className="grid-item ">
              <img src={before_1} alt=""  />
              <div className="grid-item">2 months</div>
            </div>
            <div className="grid-item">
              <img src={before_2} alt=""  />
              <div className="grid-item">4 months</div>
            </div>
            <div className="grid-item">
              <img src={before_3} alt=""  />
              <div className="grid-item">6 months</div>
            </div>
            <div className="grid-item">
              <img src={before_4} alt=""  />
              <div className="grid-item">8 months</div>
            </div>
            
            {/* <img src={before_1} alt="" className="grid-item" />
            <img src={before_2} alt="" className="grid-item" />
            <img src={before_3} alt="" className="grid-item" />
            <img src={before_4} alt="" className="grid-item" />

            <div className="grid-item">2 months</div>
            <div className="grid-item">4 months</div>
            <div className="grid-item">6 months</div>
            <div className="grid-item">8 months</div> */}
          </div>
        </div>
        <div className="clearfix" />

        <div className="doctor_recommended_section">
          <div className="container-fluid">
            <div className="row doctor">
              <div className="col-xs-12 col-sm-12 col-md-6 content">
                <div className="recommended-callout-wrapper doctor">
                  <div className="callout-inset doctor">
                    <h1 className="callout-title doctor"> DOCTOR RECOMMENDED </h1>
                    <p className='text-doctor'>
                      UV Phototherapy is the most widely recommended solution
                      for Vitiligo by doctors worldwide due to its clinical
                      validation, safety, and effectiveness.
                    </p>
                    <button className="play">PLAY VIDEO</button>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6">
                {" "}
                <img
                  src={video_1}
                  className="product-img2"
                  alt="Sildenafil"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="science_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                {" "}
                <img
                  src={video_2}
                  className="product-img3 slide"
                  alt="Sildenafil"
                />{" "}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 content">
                <div className="recommended-callout-wrapper science">
                  <div className="callout-inset science">
                    <h1 className="callout-title"> THE SCIENCE </h1>
                    <p>
                      The Noleuderm System relies on continued and concentrated
                      exposure of Vitiliginous areas to narrowband UV
                      Phototherapy via its portable handheld lamp coupled with
                      its specially formulated lotion to promote effective
                      healing and results.
                    </p>
                    <button className="play">PLAY VIDEO</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="full_bg" /> */}
        <div className="clearfix" />

        <div className="system_section">
          <div className="container-fluid">
            <div className="row science">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="callout-wrapper">
                  <div className="callout-inset system treatment">
                    <h1 className="callout-title"> THE SYSTEM </h1>
                    <p className='content-treatment'>
                      Unlike other Vitiligo treatments found online, the
                      Noleuderm System is the only one to offer clinical
                      validation and doctor endorsement. The reason? UV
                      Phototherapy works. But this effectiveness takes time and
                      frequency. To make this affordable, Noleuderm offers its
                      products on a subscription basis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6">
                <Accordion className="system-accordion">
                  <>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="0"
                      onClick={() => this.handleClick(0)}
                      className='link-button'
                    >
                      <>
                       <span className={!this.state.accordion[0]?"open-left":"open-right"}><span>1</span></span> <span className='system-btn'>START SUBSCRIPTION </span><i class="fa fa-angle-down" />
                      </>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <>asasd</>
                    </Accordion.Collapse>
                  </>
                  <>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="1"
                      onClick={() => this.handleClick(1)}
                      className='link-button'
                    >
                      <span className={!this.state.accordion[1]?"open-left":"open-right"}><span>2</span></span><span className='system-btn'>VIRTUAL APPOINTMENT</span> <i class="fa fa-angle-down" />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <>asdasdasd</>
                    </Accordion.Collapse>
                  </>
                  <>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="2"
                      onClick={() => this.handleClick(2)}
                      className='link-button'
                    >
                      <>
                      <span className={!this.state.accordion[2]?"open-left":"open-right"}><span>3</span></span> <span className='system-btn'> DOCTOR APPROVAL, DELIVERY </span><i class="fa fa-angle-down" />
                      </>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <>asasd</>
                    </Accordion.Collapse>
                  </>
                  <>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="3"
                      onClick={() => this.handleClick(3)}
                      className='link-button'
                    >
                    <span className={!this.state.accordion[3]?"open-left":"open-right"}><span>4</span></span> <span className='system-btn'> CONTINUED USE & CHECK-UPS </span><i class="fa fa-angle-down" />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <>
                        Apply the Noleuderm solution and expose the affected
                        areas of your skin to the UV light for 10 - 15 minutes a
                        day. Continue this process until the affected areas of
                        your skin regrow pigment as desired.
                      </>
                    </Accordion.Collapse>
                  </>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div className="clinical_papers_section">
          <div className="container-fluid">
            <div className="row">
            {/* <div className="callout-inset"> */}

            <div className="clinical-title">
            DOWNLOAD SUPPORTING CLINICAL PAPERS
            </div>
            <p className='clinic-text'>
            If you’re interested in learning more about the Noleuderm System and the supporting clinical
             evidence demonstrating the effectiveness our at home UV Phototherapy, submit your email:
            </p>
            </div>
            <div className="email-form last">
            <input type="text" placeholder="email"/>
            <button className='last-submit'>SUBMIT</button>
            </div>
            </div>
            <div className="mobile-endorsed">
                    <div>Endorsed By</div>
                    <div className="mobile-endorsed-list d-flex">
                      <img src={endo1} />
                      <img src={endo2} />
                      <img src={endo3} />
                    </div>
                  </div>
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default Home;

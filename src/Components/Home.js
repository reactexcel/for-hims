import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROLES from "../constants/roles";
import noleuderm_product from "../assets/images/product.png";
import hims_pdp_sildenafil_img from "../assets/images/hims_pdp_sildenafil_img.jpg";
import hims_pdp_sildenafil_img3 from "../assets/images/hims_pdp_sildenafil_img3.jpg";
import hims_pdp_sildenafil_img4 from "../assets/images/hims_pdp_sildenafil_img4.jpg";
import hims_pdp_sildenafil_img5 from "../assets/images/hims_pdp_sildenafil_img5.jpg";
import hims_pdp_sildenafil_img6 from "../assets/images/hims_pdp_sildenafil_img6.jpg";
import home_bg from "../assets/images/home-bg.png"
import endo1 from "../assets/images/FDACLEARED-white.png"
import endo2 from "../assets/images/hi-res-logo-registered.png"
import endo3 from "../assets/images/umassmedical-vitiligo-logo-white.png"
import uv_light from "../assets/images/UV-light.png"
import before_1 from "../assets/images/before-1.png"
import before_2 from "../assets/images/before-2.png"
import before_3 from "../assets/images/before-3.png"
import before_4 from "../assets/images/before-4.png"

/**UI Component for Home page */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { showInfo: false };
  }

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
              <img src={uv_light} className="uv-light"/>
              <div className="content">
              <h1>TREAT</h1>
              <h1>VITILIGO</h1>
              <p>NATURALLY. EFFECTIVE. AT HOME.</p>
              <div className="description">
              <p>Clinically Proven, Trusted Worldwide. Phototherapy is the only FDA</p>
                <p> cleared treatment for Vitiligo. The Noleuderm System couples a portable,</p>
                <p> handheld phototherapy lamp with a specially formulated lotion in order to </p>
                <p> ensure an optimal healing process and results.         </p>
              </div>
              <div className="endorsed">
              <div>Endorsed By</div>
              <div className="endorsed-list">
                <img src={endo1}/>
                <img src={endo2}/>
                <img src={endo3}/>

              </div>
              </div>
              </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3">
                <div className="baseballcard__container">
                  <div className="baseball-card__inset">
                  <div className="pricing">
                    <h1 className="baseball-card__header">
                    $49
                    </h1>
                   <div>
                     <div style={{fontSize:"1.3em",marginTop:"10px",fontWeight:"600"}}>MONTH</div>
                     <div style={{fontSize:"12px",color:"#414142",fontWeight:"lighter"}}>cancel anytime</div>
                   </div>
                    </div>
                    {/* {(role === ROLES.CUSTOMER  || role === ROLES.DOCTOR)  && ( */}
                      <Link to="#" className="btn1" onClick={onAddProduct}>
                        START <i class="fa fa-arrow-right"></i>
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
      <p>The Noleuderm System uses the same phototherapy bulbs found in the leading</p>
      <p className="before-after-content"> dermatology offices. Achieve in-office results in the comfort of your own home.</p>
      <div class="grid-container effect-month">
      <img src={before_1} alt="" className="grid-item"/>
      <img src={before_2} alt="" className="grid-item"/>
      <img src={before_3} alt="" className="grid-item"/>
      <img src={before_4} alt="" className="grid-item"/>

         <div className="grid-item">2 months</div>
         <div className="grid-item">4 months</div>
         <div className="grid-item">6 months</div>
         <div className="grid-item">8 months</div>


      </div>
      </div>
        <div className="clearfix" />

        <div className="stay_hard_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="callout-wrapper">
                  <div className="callout-inset">
                    <h1 className="callout-title"> Stay hard </h1>
                    <h3>
                      Sexy time is meant to be sexy. That <br /> means keeping
                      that erection strong for <br /> as long as it’s needed.
                      Aint no one have <br /> time for bad sexy time.
                    </h3>
                    <Link to="#" className="learn">
                      learn: how long does Viagra (Sildenafil Citrate) last
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6">
                {" "}
                <img
                  src={hims_pdp_sildenafil_img}
                  className="product-img2"
                  alt="Sildenafil"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div className="full_bg" />
        <div className="clearfix" />

        <div className="stay_hard_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="callout-wrapper">
                  <div className="callout-inset">
                    <h1 className="callout-title"> It's science </h1>
                    <h3>
                      Viagra has been prescribed by doctors <br /> across the US
                      for the last 20 years. It <br /> works, it’s effective,
                      and we’re now <br /> connecting guys directly to what they{" "}
                      <br /> need.
                    </h3>
                    <Link to="#" className="learn">
                      learn: all about ED treatments
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6">
                {" "}
                <img
                  src={hims_pdp_sildenafil_img3}
                  className="product-img2"
                  alt="Sildenafil"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div className="stay_safe_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6">
                {" "}
                <img
                  src={hims_pdp_sildenafil_img4}
                  className="product-img2"
                  alt="Sildenafil"
                />{" "}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="callout-wrapper">
                  <div className="callout-inset">
                    <h1 className="callout-title"> Stay safe </h1>
                    <h3>
                      Some men experience a tingly feeling in <br /> their body,
                      headaches, blurred vision <br /> and other side-effects
                      from Sildenafil <br /> (Viagra). Make sure to read all the{" "}
                      <br /> important safety information and use <br /> our
                      platform to talk with a doctor if you <br /> are
                      experiencing side-effects so they <br /> can recommend
                      adjustments to your <br /> treatment plan.
                    </h3>
                    <Link to="#" className="learn">
                      view our related articles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div className="viagra_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="callout-wrapper">
                  <div className="callout-inset">
                    <h1 className="callout-title"> Viagra vs Sildenafil </h1>
                    <h3>
                      Viagra is a brand name medication <br /> invented by
                      Pfizer, while sildenafil (or <br /> sildenafil citrate) is
                      the active ingredient <br /> in Viagra that’s responsible
                      for its <br /> positive effects on treating erectile{" "}
                      <br /> dysfunction.
                    </h3>
                    <Link to="#" className="learn">
                      Learn: How Viagra compares to Sildenafil
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6">
                {" "}
                <img src={hims_pdp_sildenafil_img5} alt="Sildenafil" />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div className="safety_information">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-1"> </div>

              <div className="col-xs-12 col-sm-12 col-md-10 text-center">
                <h2 className="text-center"> Important Safety information</h2>

                <button className="collapsible" onClick={this.toggleInfo}>
                  {!showInfo ? (
                    <span className="read-btn">
                      Read Now{" "}
                      <span className="glyphicon glyphicon-menu-down" />
                    </span>
                  ) : (
                    <span className="close-btn">
                      Close <span className="glyphicon glyphicon-remove" />
                    </span>
                  )}
                </button>
                {showInfo && (
                  <div className="content text-left">
                    <h3> IMPORTANT SAFETY INFORMATION</h3>
                    <h4>
                      {" "}
                      Do not take Sildenafil (sildenafil citrate) if you:
                    </h4>
                    <ul>
                      <li>
                        take any medicines called nitrates, often prescribed for
                        chest pain, or guanylate cyclase stimulators like
                        Adempas (riociguat) for pulmonary hypertension. Your
                        blood pressure could drop to an unsafe level
                      </li>

                      <li>
                        <p>
                          are allergic to sildenafil, as contained in Sildenafil
                          and REVATIO, or any of the ingredients in Sildenafil
                        </p>

                        <p>
                          Discuss your health with your doctor to ensure that
                          you are healthy enough for sex. If you experience
                          chest pain, dizziness, ornausea during sex, seek
                          immediate medical help
                        </p>

                        <p>
                          <strong>
                            Sildenafil can cause serious side effects. Rarely
                            reported side effects include:
                          </strong>
                        </p>
                      </li>

                      <li>
                        an erection that will not go away (priapism).&nbsp;If
                        you have an erection that lasts more than 4 hours, get
                        medical help right away.If it is not treated right away,
                        priapism can permanently damage your penis
                      </li>

                      <li>
                        sudden vision loss in one or both eyes.&nbsp;Sudden
                        vision loss in one or both eyes can be a sign of a
                        serious eye problem callednon-arteritic anterior
                        ischemic optic neuropathy (NAION). Stop taking
                        Sildenafil and call your healthcare provider right away
                        if youhave any sudden vision loss
                      </li>

                      <li>
                        <p>
                          sudden hearing decrease or hearing loss.&nbsp;Some
                          people may also have ringing in their ears (tinnitus)
                          or dizziness. If you havethese symptoms, stop taking
                          Sildenafil and contact a doctor right away
                        </p>
                        <p>
                          <strong>
                            Before you take Sildenafil, tell your healthcare
                            provider if you:
                          </strong>
                        </p>
                      </li>

                      <li>
                        have or have had heart problems such as a heart
                        attack,irregular heartbeat, angina, chest pain,
                        narrowing of the aortic valve, or heart failure
                      </li>

                      <li>have had heart surgery within the last 6 months</li>
                      <li>have pulmonary hypertension</li>

                      <li>have had a stroke</li>
                      <li>
                        have low blood pressure, or high blood pressure thatis
                        not controlled
                      </li>

                      <li>have a deformed penis shape</li>
                      <li>
                        have had an erection that lasted for more than 4 hours
                      </li>

                      <li>
                        have problems with your blood cells such as sickle
                        cellanemia, multiple myeloma, or leukemia
                      </li>
                      <li>
                        have retinitis pigmentosa, a rare genetic (runs in
                        families)eye disease
                      </li>

                      <li>
                        have ever had severe vision loss, including an eye
                        problemcalled NAION
                      </li>
                      <li>have bleeding problems</li>

                      <li>have or have had stomach ulcers</li>

                      <li>have liver problems</li>

                      <li>
                        <p>
                          have kidney problems or are having kidney dialysis
                          have any other medical conditions
                        </p>

                        <p>
                          <strong>
                            Tell your healthcare provider about all the
                            medicines you take
                          </strong>
                          , including prescription and over-the-counter
                          medicines, vitamins,and herbal supplements.
                        </p>

                        <p>
                          Sildenafil may affect the way other medicines work,
                          and other medicines may affect the way Sildenafil
                          works, causing side effects.Especially tell your
                          healthcare provider if you take any of the following:
                        </p>
                      </li>

                      <li>medicines called nitrates</li>

                      <li>
                        medicines called guanylate cyclase stimulators such as
                        Adempas (riociguat)
                      </li>

                      <li>
                        medicines called alpha-blockers such as Hytrin
                        (terazosinHCl), Flomax (tamsulosin HCl), Cardura
                        (doxazosinmesylate), Minipress (prazosin HCl), Uroxatral
                        (alfuzosin HCl),Jalyn (dutasteride and tamsulosin HCl),
                        or Rapaflo (silodosin).Alpha-blockers are sometimes
                        prescribed for prostateproblems or high blood pressure.
                        In some patients, the useof Sildenafil with
                        alpha-blockers can lead to a drop in blood pressure or
                        to fainting
                      </li>

                      <li>
                        medicines called HIV protease inhibitors, such as
                        ritonavir (Norvir), indinavir sulfate (Crixivan),
                        saquinavir (Fortovase or Invirase), or atazanavir
                        sulfate (Reyataz)
                      </li>

                      <li>
                        some types of oral antifungal medicines, such
                        asketoconazole (Nizoral) and itraconazole (Sporanox)
                      </li>

                      <li>
                        some types of antibiotics, such as clarithromycin
                        (Biaxin),telithromycin (Ketek), or erythromycin
                      </li>

                      <li>other medicines that treat high blood pressure</li>

                      <li>other medicines or treatments for ED</li>

                      <li>
                        <p>
                          Sildenafil contains sildenafil, which is the same
                          medicine foundin another drug called REVATIO. REVATIO
                          is used to treat arare disease called pulmonary
                          arterial hypertension (PAH).Sildenafil should not be
                          used with REVATIO or with other PAHtreatments
                          containing sildenafil or any other PDE5
                          inhibitors(such as Adcirca{" "}
                          <Link to="">tadalafil</Link>)
                        </p>

                        <p>
                          Sildenafil does not protect against sexually
                          transmitted diseases, including HIV.
                        </p>
                        <p>
                          <strong>
                            The most common side effects of Sildenafil:
                          </strong>
                          &nbsp;headache; flushing; upset stomach; abnormal
                          vision, such as changes in color vision(such as having
                          a blue color tinge) and blurred vision; stuffy or
                          runny nose; back pain; muscle pain; nausea; dizziness;
                          rash.
                        </p>

                        <h4>H2 INDICATION</h4>
                        <p>
                          Sildenafil (sildenafil citrate) is prescription
                          medicine used to treat erectile dysfunction (ED).
                        </p>
                        <p>Sildenafil is not for women or children.</p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-1"> </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div className="mokokoma_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-1"> </div>
              <div className="col-xs-12 col-sm-12 col-md-5">
                <h4> - Mokokoma Mokhonoana</h4>
                <h2>
                  Even the world’s greatest actor cannot fake an erection.
                </h2>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5">
                <h2 className="text-right">
                  <img src={hims_pdp_sildenafil_img6} alt="Sildenafil" />{" "}
                </h2>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-1"> </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

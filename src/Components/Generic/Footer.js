import React, { memo } from "react";
import legitscript_logo from "../../assets/images/legitscript_logo.png";
import bbb_logo from "../../assets/images/bbb_logo.png";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-white.png"
/**UI component for Footer of App */
const Footer = memo(() => {
  /**Smooth Scroll Behaviour to top  */
  const scrollToTop = () => {
    if (window.pageYOffset) {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return ( 
    <>
      <footer className="footer mobile">
        <div className="container-fluid">
          <div className="row">
          <div className='logo-main-row'>
            <div className='logo-class'>
            <img src={logo} alt="" className='logo-image' />
            </div>
            <div className='footer-main-detail'>
            <p className='footer-detail'>
             Results may vary.Noleuderm is not a drug and is not intended to diagnose,treat,or prevent
             any disease.Individual resul may vary and improvement is often seen within 4 week of use with
             complete result after 16 to 20 days of continuous use .The information throughout the website is not
             meant to substitute the advice of your physician or other medical professional,nor should it be 
             used for diagnosing or treat health problem or disease, and it meant for information purposes only.
             All packaging and labels should be read carefull.If any issue shall arise during the use of
             Noleuderm you should stop using it and contact you physician .Statement and information regarding
             cosmetic grade products are not evaluated by the Food and Drug Administration and are not intended 
             to diagnose treat ,cure ,or prevent any disease.
           </p>
            </div>
         
           
          </div>
          {/* <div className = 'copyright-mobile '>
            <div className="first">COPYRIGHT @2019.NOLEUDERM ALL RIGHTS RESERVED </div>
            <div>
              <div className="second">COPY RIGHT</div>
              <div className="third">PRIVACY POLICY</div>
              <div className="fourth">TERMS & CONDITION</div>
            </div>
          </div> */}
           
           <div className="copyright footer  ">
             <div className="first one">COPYRIGHT @2019.NOLEUDERM ALL RIGHTS RESERVED </div>
             <div className='footer-condition'>
             <div className="second two">COPY RIGHT</div>
             <div className="third three">PRIVACY POLICY</div>
             <div className="fourth four">TERMS & CONDITION</div>
             </div>
             
           </div>
          </div>
        </div>
      </footer>

      <button className="scrollup" onClick={scrollToTop}>
        <i className="fa fa-angle-double-up" aria-hidden="true" />
      </button>
    </>
  );
});

export default Footer;

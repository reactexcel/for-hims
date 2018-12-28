import React, { Component } from 'react';
import legitscript_logo from '../../assets/images/legitscript_logo.png';
import bbb_logo from '../../assets/images/bbb_logo.png';


class Footer extends Component {
  render() {
    return (
    	<>
      <footer className="footer">
<div className="container">
<div className="row">
<div className="col-xs-12 col-sm-6 col-md-6">
<h4 className="pt2">Have a question?</h4>
<ul className="footer_ul_amrc">

<li> <a href="#">Help</a></li>
<li> <a href="mailto:contact@forhims.com">contact@forhims.com</a></li>
</ul>

<h5>&nbsp; </h5>

<h4 className="pt2">Press inquiries?</h4>
<ul className="footer_ul_amrc">
<li> <a href="mailto:press@forhims.com">press@forhims.com</a></li>
</ul>

</div>


<div className="col-xs-12 col-sm-2 col-md-2">
<h4 className="pt2">Shop</h4>

<ul className="footer_ul_amrc">
<li><a href="#">Hair</a></li>
<li><a href="#">Skin</a></li>
<li><a href="#">Sex</a></li>
<li><a href="#">Mouth</a></li>
<li><a href="#">Vitals</a></li>
<li><a href="#">Merch</a></li>
</ul>




</div>


<div className="col-xs-12 col-sm-2 col-md-2">
<h4 className="pt2">Learn</h4>

<ul className="footer_ul_amrc">
<li><a href="#">Savoir Faire</a></li>
<li><a href="#">The Science</a></li>
<li><a href="#">Purpose</a></li>
<li><a href="#">About Us</a></li>
<li><a href="#">Reviews</a></li>
</ul>




</div>


<div className="col-xs-12 col-sm-2 col-md-2">
<h4 className="pt2">Guides</h4>


<ul className="footer_ul_amrc">
<li><a href="#">Help</a></li>
<li><a href="#">Treatment Plans</a></li>
</ul>



</div>
</div>
</div>


<div className="container logo_footer">

<div className="row">


<div className="col-xs-12 col-sm-6 col-md-6">  
<a href="#"><img src={legitscript_logo}/> </a> &nbsp;  <a href="#"> <img src={bbb_logo}/></a></div>

<div className="col-xs-12 col-sm-6 col-md-6"> 

<ul className="social_icons">
<li> <a href="#" className="fa fa-facebook"> </a>  </li> 
<li> <a href="#" className="fa fa-twitter"> </a>  </li> 
<li> <a href="#" className="fa fa-instagram"> </a>  </li> 
</ul>


  </div>


<div className="col-xs-12 col-sm-12 col-md-12">

<h5 className="footer_message"> *all photos are models and not actual patients. <br/>If you are interested in a prescription product, Hims will assist in setting up a visit for you with an independent physician who will evaluate whether or not you are an appropriate candidate for the prescription product and if appropriate, may write you a prescription for the product which you can fill at the pharmacy of your choice.</h5>


<ul className="copyright_section">
<li> <a href="#"> Terms & Conditions </a>  </li> 
<li> <a href="#"> Privacy Policy </a>  </li> 
<li>  Copyright 2018 HIMS. All rights reserved.</li> 
</ul>

</div> </div></div>

</footer>

<div className="scrollup" href="#"><i className="fa fa-angle-double-up" aria-hidden="true"></i></div>

</>

    );
  }
}

export default Footer;

import React, { Component } from 'react';
import hims_pdp_sildenafil_product01 from '../assets/images/hims_pdp_sildenafil_product01.png';
import hims_pdp_sildenafil_img from '../assets/images/hims_pdp_sildenafil_img.jpg';
import hims_pdp_sildenafil_img3 from '../assets/images/hims_pdp_sildenafil_img3.jpg';
import hims_pdp_sildenafil_img4 from '../assets/images/hims_pdp_sildenafil_img4.jpg';
import hims_pdp_sildenafil_img5 from '../assets/images/hims_pdp_sildenafil_img5.jpg';
import hims_pdp_sildenafil_img6 from '../assets/images/hims_pdp_sildenafil_img6.jpg';


class ActionRequired extends Component {
  render() {
    return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12"> 
						<div className="action_required_section">
							<a href="reply.html" className="reply_btn"> Reply </a> 
							<a href="back-to-inbox.html" className="back_btn"> Back to Inbox </a>
							<div className="message_viewer_outer">
								<h5 className="grew">May 28, 2018 11:08 AM</h5>
								<h4> Your ID photo didn't meet our criteria. Please take a picture of a government issued license that has your picture.</h4> 
								<button tabindex="0" type="button" className="photo_btn">Select from Photo Library</button>
								<div className="camera-container"> </div>
								<div className="camera_icons"><i className="fa fa-camera"></i></div>
							</div>
						</div>
					</div>
				</div> 
			</div> 
    );
  }
}

export default ActionRequired;

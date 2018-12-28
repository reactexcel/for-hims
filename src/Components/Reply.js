import React, { Component } from 'react';

class Reply extends Component {
  render() {
    return (
			<div className="container"> 
				<div class="row"> 
    			<div className="col-xs-12 col-sm-12 col-md-2"></div>
  				<div className="col-xs-12 col-sm-12 col-md-8">
  					<div className="reply_section"> 
							<a href="action-required.html" className="messages_support"><h4>Contact Support</h4>For all order and account related questions, contact our support team.</a>
							<a href="message-your-doctor.html" className="messages_doctor"><h4>Message your doctor</h4>For all medical related inquiries.</a>
							<a href="action-required.html" className="read"> Back to Inbox </a>
						</div> 
					</div>
					<div className="col-xs-12 col-sm-12 col-md-2"></div>
				</div>
			</div>
    );
  }
}

export default Reply;

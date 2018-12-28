import React, { Component } from 'react';

class MessageYourDoctor extends Component {
  render() {
    return (
			<div class="container"> <div class="row"> 
  
    <div class="col-xs-12 col-sm-12 col-md-1">   </div>
  
  <div class="col-xs-12 col-sm-12 col-md-10"> 
  
  
   

<div class="message_create_close">
<h4>Message</h4>

<form> <textarea name="body" placeholder="Enter you message here..."></textarea></form>



<a href="#" class="read"> Submit Message</a> &nbsp; <a href="action-required.html" class="black">Cancel</a>




</div>
  
   </div>

<div class="col-xs-12 col-sm-12 col-md-1">   </div>
</div></div>
    );
  }
}

export default MessageYourDoctor;

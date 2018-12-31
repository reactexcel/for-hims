import React, { Component } from 'react';

class ActionItems extends Component {
  render() {
    return (
			 <div id="mySidenav10" class="sideleft">
  <a href="javascript:void(0)" class="closebtn" onClick="closeNav10()"> <span class="glyphicon glyphicon-menu-left"></span> </a>
  
    
  <div class="action-section">
<h3> Action Items <i class="fa fa-close"></i></h3>
<div class="action-items_record">
<h4> Pending Medical Consultation</h4> 
We cannot process order #W1HQD3CC until you complete your medical consultation </div>

<div class="action-items_record">
<h4> <a href="action-required.html"> Action Required </a></h4> 
<a href="action-required.html"> Your photo didn't meet our criteria. Please upload the appropriate photo. </a> </div>

 </div>


</div>
    );
  }
}

export default ActionItems;

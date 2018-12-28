import React, { Component } from 'react';

class VerifyAddress extends Component {
  render() {
    return (
			<div >
  
    <div class="symbols">  
   <div class="symbols-title">Shipping</div>
   <ul>
   <li class="symbols1">  </li>
   <li class="symbols2">  </li>
   <li class="symbols3 active">  </li>
   <li class="symbols4">  </li>
   <li class="symbols5">  </li>
   </ul>
  </div>
			<div class="verify_address_box"> 
				<h3> Verify your address </h3>
				<blockquote class="select_no"> 
					<input type="radio" /> <strong>Original address:</strong> <br/> 1069 N, Bodine st <br/> Philadelphia, PA <br/> 19123 <br/> USA 
				</blockquote>
				<blockquote class="select_yes"> 
					<input type="radio" checked/> <strong>Suggested address:</strong> <br/> 1069 N, Bodine st <br/> Philadelphia, PA <br/> 19123 <br/> USA 
				</blockquote>
				<a href="#" class="read"> edit address</a>
			</div>
			<button tabindex="0" type="button" class="login_btn"> CONFIRM </button>
			</div>
			
    );
  }
}

export default VerifyAddress;

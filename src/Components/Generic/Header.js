import React, { Component } from 'react';
import hims_logo from '../../assets/images/hims_logo.png';

class Header extends Component {
  render() {
    return (
    	<>
      	<div className="navbar navbar-default navbar-fixed-top" role="navigation">
      		<div className="container">
      			<div className="cart_desktop"> <a href="#" onClick="openNav1()">Cart </a> </div>
      			<div className="header_logo"> 
      				<a href="index.html"> 
      					<img src={hims_logo} title="hime" alt="hime"/>
      				</a>
      			</div>
      
		        <div className="navbar-header">
		          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
		            <span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		          </button>
		       	</div>
       
		        <div className="navbar-collapse collapse">
		          <ul className="nav navbar-nav">
		            <li onClick="openNav7()"><a> Account </a></li>
		             <li onClick="openNav8()"><a> Shipping Address </a></li>
		             <li onClick="openNav9()"><a> Verify address </a></li>
		             <li onClick="openNav10()"><a> Action Items </a></li> 
		              <li onClick="openNav11()"><a> Confirm Order </a></li> 
		         </ul>		         
		          <ul className="nav navbar-nav navbar-right">
		            <li className="mobile_none" onClick="openNav1()"><a>Cart </a></li>
		            <li onClick="openNav2()"><a>Login </a></li>
		            <li onClick="openNav3()"><a>Sign up </a></li>
		            <li onClick="openNav4()"><a>Shop </a></li>
		            <li onClick="openNav5()"><a>Shipping </a></li>
		            <li onClick="openNav6()"><a>Payment </a></li>		   
		          </ul>		          
		        </div>
      		</div>
    		</div> 
    		<div className="clearfix"></div>

    		

    	</>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import hims_logo from '../../assets/images/hims_logo.png';
import Sidebar from './Sidebar'

class Header extends Component {

	constructor(props){
		super(props);
		this.state = {
			openSidebar: false
		}
	}

	_openSidebar = ( side, content) => {
		this.setState({
			openSidebar: side,
			sidebarContent: content
		})
	}

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
		            <li onClick={() => this._openSidebar('left','account')}><a> Account </a></li>
		            <li onClick={() => this._openSidebar('left','shipping_address')}><a> Shipping Address </a></li>
		            <li onClick={() => this._openSidebar('left','verify_address')}><a> Verify address </a></li>
		            <li onClick={() => this._openSidebar('left','action_items')}><a> Action Items </a></li> 
		            <li onClick={() => this._openSidebar('right','confirm_order')}><a> Confirm Order </a></li> 
		         </ul>		         
		          <ul className="nav navbar-nav navbar-right">
		            <li className="mobile_none" onClick={() => this._openSidebar('right','cart')}><a>Cart </a></li>
		            <li onClick={() => this._openSidebar('right','login')}><a>Login </a></li>
		            <li onClick={() => this._openSidebar('right','sign_up')}><a>Sign up </a></li>
		            <li onClick={() => this._openSidebar('right','shop')}><a>Shop </a></li>
		            <li onClick={() => this._openSidebar('right','shipping')}><a>Shipping </a></li>
		            <li onClick={() => this._openSidebar('right','payment')}><a>Payment </a></li>		   
		          </ul>		          
		        </div>
      		</div>
    		</div> 
    		<div className="clearfix"></div>

    		{
    			this.state.openSidebar != false ?
    				<Sidebar
    					openSidebar={this.state.openSidebar}
    					content={this.state.sidebarContent}
    					closeSidebar={() => {
    						console.log('asdasdasdasdasdasdasd')
    						this.setState({
    							openSidebar: false
    						})
    					}}
    				/>
    			: null 
    		}
    		

    	</>
    );
  }
}

export default Header;

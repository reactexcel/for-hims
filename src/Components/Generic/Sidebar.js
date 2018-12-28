import React, { Component } from 'react';
import Account from '../Sidebar/Account';
import ActionItems from '../Sidebar/ActionItems';
import Cart from '../Sidebar/Cart';
import ConfirmOrder from '../Sidebar/ConfirmOrder';
import Login from '../Sidebar/Login';
import Payment from '../Sidebar/Payment';
import Shipping from '../Sidebar/Shipping';
import ShippingAddress from '../Sidebar/ShippingAddress';
import Shop from '../Sidebar/Shop';
import SignUp from '../Sidebar/SignUp';
import VerifyAddress from '../Sidebar/VerifyAddress';

class Sidebar extends Component {

	constructor(props){
    super(props);
    this.state = {
    	// sidebarPosition: 'left'
    }
  }

  _renderItem = (param) => {
  	switch( param ){
  		case 'account':
  			return <Account/>
  		case 'action_items':
  			return <ActionItems/>
  		case 'cart':
  			return <Cart/>
  		case 'confirm_order':
  			return <ConfirmOrder/>
  		case 'login':
  			return <Login/>
  		case 'payment':
  			return <Payment/>
  		case 'shipping':
  			return <Shipping/>
  		case 'shipping_address':
  			return <ShippingAddress/>
  		case 'shop':
  			return <Shop/>
  		case 'sign_up':
  			return <SignUp/>
  		case 'verify_address':
  			return <VerifyAddress/>
  	}
  }

  render() {

  	console.log('pppp')
  	console.log( this.props )

  	let sidebarPositionClass = this.props.openSidebar == 'left' ? 'sideleft' : 'sideright';

  	console.log(sidebarPositionClass)
  	console.log(sidebarPositionClass)
  	console.log(sidebarPositionClass)
    return (
    	<div id="mySidenav7" class={sidebarPositionClass} >
    		<a href="#" class="closebtn" onClick={this.props.closeSidebar}> <span class="glyphicon glyphicon-menu-left"></span> </a>
			 	{this._renderItem(this.props.content)}
			</div>
    );
  }
}

export default Sidebar;

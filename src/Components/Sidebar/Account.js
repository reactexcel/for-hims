import React, { Component } from 'react';

class Account extends Component {
  render() {
    return (
    	<div id="mySidenav7">
				<div className="profile_menu_box">
				 	<h4> Hi there! </h4>
					<ul className="profile_menu">
						<li><a href="profile.html">Profile</a></li>
						<li><a href="orders.html">Orders</a></li>
						<li><a href="messages.html">Messages</a></li>
						<li><a href="#">Logout</a></li>
					</ul>
				</div>
			</div>
    );
  }
}

export default Account;

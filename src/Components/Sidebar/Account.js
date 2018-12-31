import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Account extends Component {
  render() {
    return (
    	<>
				<div className="profile_menu_box">
				 	<h4> Hi there! </h4>
					<ul className="profile_menu">
						<li><Link to="/profile">Profile</Link></li>
						<li><Link to="/orders">Orders</Link></li>
						<li><Link to="/messages">Messages</Link></li>
						<li><Link to="#">Logout</Link></li>
					</ul>
				</div>
			</>
    );
  }
}

export default Account;

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Shop extends Component {
  render() {
    return (
			<>
				<div className="profile_menu_box">
					<ul className="profile_menu">
						<li><Link to="#">Hair</Link></li>
						<li><Link to="#">Sex</Link></li>
						<li><Link to="#">Skins</Link></li>
						<li><Link to="#">Vitals</Link></li>
            <li><Link to="#">Mouth</Link></li>
					</ul>
				</div>
			</>
    );
  }
}

export default Shop;

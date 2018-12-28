import React, { Component } from 'react';
import Header from '../Components/Generic/Header';
import Footer from '../Components/Generic/Footer';
import Profile from '../Components/Profile';

class ProfileContainer extends Component {
  render() {
    return (
      <div>
      	<Header/>
        	<Profile/>
        <Footer/>
      </div>
    );
  }
}

export default ProfileContainer;

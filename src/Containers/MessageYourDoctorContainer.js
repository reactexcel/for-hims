import React, { Component } from 'react';
import Header from '../Components/Generic/Header';
import Footer from '../Components/Generic/Footer';
import MessageYourDoctor from '../Components/MessageYourDoctor';

class MessageYourDoctorContainer extends Component {
  render() {
    return (
      <div>
      	<Header/>
        	<MessageYourDoctor/>
        <Footer/>
      </div>
    );
  }
}

export default MessageYourDoctorContainer;

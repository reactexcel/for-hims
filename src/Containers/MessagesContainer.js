import React, { Component } from 'react';
import Header from '../Components/Generic/Header';
import Footer from '../Components/Generic/Footer';
import Messages from '../Components/Messages';

class MessagesContainer extends Component {
  render() {
    return (
      <div>
      	<Header/>
        	<Messages/>
        <Footer/>
      </div>
    );
  }
}

export default MessagesContainer;

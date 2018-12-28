import React, { Component } from 'react';
import Header from '../Components/Generic/Header';
import Footer from '../Components/Generic/Footer';
import BackToInbox from '../Components/BackToInbox';

class BackToInboxContainer extends Component {
  render() {
    return (
      <div>
        <Header/>
          <BackToInbox/>
        <Footer/>
      </div>
    );
  }
}

export default BackToInboxContainer;

import React, { Component } from 'react';
import Header from '../Components/Generic/Header';
import Footer from '../Components/Generic/Footer';
import ActionRequired from '../Components/ActionRequired'

class ActionRequiredContainer extends Component {
  render() {
    return (
      <div>
        <Header/>
          <ActionRequired/>
        <Footer/>
      </div>
    );
  }
}

export default ActionRequiredContainer;

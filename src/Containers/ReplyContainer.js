import React, { Component } from 'react';
import Header from '../Components/Generic/Header';
import Footer from '../Components/Generic/Footer';
import Reply from '../Components/Reply'

class ReplyContainer extends Component {
  render() {
    return (
      <div>
        <Header/>
          <Reply/>
        <Footer/>
      </div>
    );
  }
}

export default ReplyContainer;

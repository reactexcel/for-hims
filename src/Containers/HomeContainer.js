import React, { Component } from 'react';
import Header from '../Components/Generic/Header';
import Footer from '../Components/Generic/Footer';
import Home from '../Components/Home'

class HomeContainer extends Component {
  render() {
    return (
      <>
        <Header/>
          <Home/>
        <Footer/>
      </>
    );
  }
}

export default HomeContainer;

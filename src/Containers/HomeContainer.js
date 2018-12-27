import React, { Component } from 'react';
import Header from '../Components/Generic/Header';
import Footer from '../Components/Generic/Footer';
import Home from '../Components/Home'

class HomeContainer extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Home/>
        <Footer/>
      </div>
    );
  }
}

export default HomeContainer;

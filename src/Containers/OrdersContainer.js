import React, { Component } from 'react';
import Header from '../Components/Generic/Header';
import Footer from '../Components/Generic/Footer';
import Orders from '../Components/Orders';

class OrdersContainer extends Component {
  render() {
    return (
      <div>
      	<Header/>
        	<Orders/>
        <Footer/>
      </div>
    );
  }
}

export default OrdersContainer;

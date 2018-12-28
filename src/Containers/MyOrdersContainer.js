import React, { Component } from 'react';
import Header from '../Components/Generic/Header';
import Footer from '../Components/Generic/Footer';
import MyOrders from '../Components/MyOrders';

class MyOrdersContainer extends Component {
  render() {
    return (
      <div>
      	<Header/>
        	<MyOrders/>
        <Footer/>
      </div>
    );
  }
}

export default MyOrdersContainer;

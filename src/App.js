import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './Containers/HomeContainer';

class App extends Component{
  render(){
    return(     
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer}/>
        </Switch>
      </Router>
    )
  }
}
export default App;

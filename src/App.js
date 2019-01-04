import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import ActionRequiredContainer from "./Containers/ActionRequiredContainer";
import BackToInboxContainer from "./Containers/BackToInboxContainer";
import GenderContainer from "./Containers/GenderContainer";
import HomeContainer from "./Containers/HomeContainer";
import InformedConsentContainer from "./Containers/InformedConsentContainer";
import MessagesContainer from "./Containers/MessagesContainer";
import MessageYourDoctorContainer from "./Containers/MessageYourDoctorContainer";
import MyOrdersContainer from "./Containers/MyOrdersContainer";
import OrdersContainer from "./Containers/OrdersContainer";
import PhotosContainer from "./Containers/PhotosContainer";
import ProfileContainer from "./Containers/ProfileContainer";
import QuestionsContainer from "./Containers/QuestionsContainer";
import ReplyContainer from "./Containers/ReplyContainer";
import { Provider } from "react-redux";
import createStore from "./createStore";

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route
              exact
              path="/action-required"
              component={ActionRequiredContainer}
            />
            <Route
              exact
              path="/back-to-inbox"
              component={BackToInboxContainer}
            />
            <Route exact path="/gender" component={GenderContainer} />
            <Route
              exact
              path="/informed-consent"
              component={InformedConsentContainer}
            />
            <Route exact path="/messages" component={MessagesContainer} />
            <Route
              exact
              path="/message-your-doctor"
              component={MessageYourDoctorContainer}
            />
            <Route exact path="/my-orders" component={MyOrdersContainer} />
            <Route exact path="/orders" component={OrdersContainer} />
            <Route exact path="/photos" component={PhotosContainer} />
            <Route exact path="/profile" component={ProfileContainer} />
            <Route exact path="/questions" component={QuestionsContainer} />
            <Route exact path="/reply" component={ReplyContainer} />
          </Switch>
        </Router>
     </Provider>
    );
  }
}
export default App;

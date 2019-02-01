import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import requireAuth from "./hoc/requireAuth";
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
import ScrollToTop from "./Components/Generic/ScrollToTop";
const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="free_shipping_promo">free shipping on all orders</div>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route
                exact
                path="/action-required"
                component={requireAuth(ActionRequiredContainer)}
              />
              <Route
                exact
                path="/back-to-inbox"
                component={requireAuth(BackToInboxContainer)}
              />
              <Route
                exact
                path="/gender"
                component={requireAuth(GenderContainer)}
              />
              <Route
                exact
                path="/informed-consent"
                component={requireAuth(InformedConsentContainer)}
              />
              <Route
                exact
                path="/messages"
                component={requireAuth(MessagesContainer)}
              />
              <Route
                exact
                path="/message-your-doctor"
                component={requireAuth(MessageYourDoctorContainer)}
              />
              <Route
                exact
                path="/my-orders"
                component={requireAuth(MyOrdersContainer)}
              />
              <Route
                exact
                path="/orders"
                component={requireAuth(OrdersContainer)}
              />
              <Route
                exact
                path="/photos"
                component={requireAuth(PhotosContainer)}
              />
              <Route
                exact
                path="/profile"
                component={requireAuth(ProfileContainer)}
              />
              <Route
                exact
                path="/questions"
                component={requireAuth(QuestionsContainer)}
              />
              <Route
                exact
                path="/messages/:id"
                component={requireAuth(ReplyContainer)}
              />
            </Switch>
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}
export default App;

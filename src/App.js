import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import requireAuthentication from "./hoc/requireAuthentication";
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
import ErrorBoundary from "./Components/Generic/ErrorBoundary";
import CreateDoctorContainer from "./Containers/AdminContainer/CreateDoctorContainer";
import CustomerOrdersContainer from "./Containers/DoctorContainer/CustomerOrdersContainer";
import OrdersTableContainers from "./Containers/OrdersTableContainers.js"
import ContactUsContainer from "./Containers/ContactUs"
const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="free_shipping_promo">free shipping on all orders</div>
        <ErrorBoundary>
          <Router>
            <ScrollToTop>
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route
                  exact
                  path="/action-required"
                  component={requireAuthentication(ActionRequiredContainer)}
                />
                <Route
                  exact
                  path="/back-to-inbox"
                  component={requireAuthentication(BackToInboxContainer)}
                />
                <Route
                  exact
                  path="/gender"
                  component={requireAuthentication(GenderContainer)}
                />
                <Route
                  exact
                  path="/informed-consent"
                  component={requireAuthentication(InformedConsentContainer)}
                />
                <Route
                  exact
                  path="/messages"
                  component={requireAuthentication(MessagesContainer)}
                />
                <Route
                  exact
                  path="/message-your-doctor"
                  component={requireAuthentication(MessageYourDoctorContainer)}
                />
                <Route
                  exact
                  path="/my-orders"
                  component={requireAuthentication(MyOrdersContainer)}
                />
                <Route
                  exact
                  path="/orders"
                  component={requireAuthentication(OrdersContainer)}
                />
                <Route
                  exact
                  path="/orders-table"
                  component={requireAuthentication(OrdersTableContainers)}
                />
                <Route
                  exact
                  path="/photos"
                  component={requireAuthentication(PhotosContainer)}
                />
                <Route
                  exact
                  path="/profile"
                  component={requireAuthentication(ProfileContainer)}
                />
                <Route
                  exact
                  path="/questions"
                  component={requireAuthentication(QuestionsContainer)}
                />
                <Route
                  exact
                  path="/messages/:id"
                  component={requireAuthentication(ReplyContainer)}
                />
                <Route
                  path="/create-doctor"
                  component={requireAuthentication(CreateDoctorContainer)}
                />
                <Route
                  path="/customer-details/:uid"
                  component={requireAuthentication(CustomerOrdersContainer)}
                />
                <Route
                  path="/contact-us"
                  component={requireAuthentication(ContactUsContainer)}
                />
              </Switch>
            </ScrollToTop>
          </Router>
        </ErrorBoundary>
      </Provider>
    );
  }
}
export default App;

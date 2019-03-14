import React from "react";

const FirebaseContext = React.createContext(null);

export default FirebaseContext;

export const withFirebase = WrappedComponent => props => (
  <FirebaseContext.Consumer>
    {firebase => <WrappedComponent {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

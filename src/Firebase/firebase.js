import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const settings = { timestampsInSnapshots: true };

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.EmailAuthProvider = app.auth.EmailAuthProvider;
    this.db = app.firestore();
    this.db.settings(settings);
  }

  //Authentication API

  //creating user with email and password
  createUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //user sign in
  userSignIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //user sign out
  userSignOut = () => this.auth.signOut();

  //user forgot password
  userForgotPassword = email => this.auth.sendPasswordResetEmail(email);

  //user update password
  userUpdatePassword = password =>
    this.auth.currentUser.updatePassword(password);

  // validate old password
  validateOldPassword = password => {
    this.auth.currentUser.reauthenticateAndRetrieveDataWithCredential(
      this.EmailAuthProvider.credential(this.auth.currentUser.email, password)
    );
  };

  // *** User API ***

  user = uid => this.db.collection("users").doc(uid);

  userMessages = uid =>
    this.db
      .collection("users")
      .doc(uid)
      .collection("messages");

  userOrders = uid =>
    this.db
      .collection("users")
      .doc(uid)
      .collection("orders");
}

export default Firebase;

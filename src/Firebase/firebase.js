import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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
    this.storage = app.storage();
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
  //message api
  userMessages = uid =>
    this.db
      .collection("users")
      .doc(uid)
      .collection("messages");
  //address api
  userAddress = uid =>
    this.db
      .collection("users")
      .doc(uid)
      .collection("shippingAddress");
  //orders api
  userOrders = uid =>
    this.db
      .collection("users")
      .doc(uid)
      .collection("orders");

  // Creating storage ref for uploading photo
  uploadPhoto = file => {
    let user = this.auth.currentUser.uid;
    let storageRef = this.storage.ref();
    let photoRef = storageRef.child(`${user}/${file.name || "image"}`);
    return photoRef.put(file);
  };

  //fetching all questions
  fetchQuestions = () => this.db.collection("questions");
}
export default Firebase;

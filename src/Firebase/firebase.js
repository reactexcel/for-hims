import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { resolve, reject } from "q";

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
    this.authApp = app.initializeApp(config, "detachedAuth");
    this.detachedAuth = this.authApp.auth();
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

  //creating user by admin
  createUserByAdmin = (email, password) =>
    this.detachedAuth.createUserWithEmailAndPassword(email, password);

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
  users = () => this.db.collection("users");
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
  userOrders = uid => this.db.collection("orders");

  // Creating storage ref for uploading photo
  uploadPhoto = file => {
    let user = this.auth.currentUser.uid;
    let storageRef = this.storage.ref();
    let photoRef = storageRef.child(`${user}/${file.name || "image"}`);
    return photoRef.put(file);
  };

  //fetching all questions
  fetchQuestions = () => this.db.collection("questions");
  //fetch doctor
  fetchDoctor = () => this.db.collection("users").where("role", "==", "doctor");
  //fetch state wise user
  fetchStateWiseUser = async state => {
    return new Promise((resolve, reject) => {
      this.db
        .collection("users")
        .get()
        .then(response => {
          let data = [];
          response.docs.forEach((val, key) => {
            let address =
              Array.isArray(val.data().shippingAddress) &&
              val
                .data()
                .shippingAddress.filter(value => value["states"] === state);
            if (address.length) {
              const dataWithId = val.data();
              dataWithId["uid"] = val.id;
              data.push(dataWithId);
            }
            if (key == response.docs.length - 1) {
              resolve(data);
            }
          });
        });
    });
  };
}
export default Firebase;

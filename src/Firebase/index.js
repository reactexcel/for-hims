import FirebaseContext, { withFirebase } from "./context";
import Firebase from "./firebase";

export const firebase = new Firebase();
export default Firebase;
export { FirebaseContext, withFirebase };

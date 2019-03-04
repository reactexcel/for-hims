import { put } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as actions from "./index";
import { firebase } from "../Firebase";
import * as ROLES from "../constants/roles";
export function* signupRequest(action) {
  const { email, password } = action.payload;
  let { role, firstName, lastName, phone, states } = action.payload;
  role = role ? role : ROLES.CUSTOMER;
  try {
    const response = yield firebase.createUser(email, password);
    const data = {
      displayName: response.user.displayName,
      email: response.user.email,
      phoneNumber: response.user.phoneNumber,
      uid: response.user.uid
    };
    const { uid } = response.user;
    const userResponse = yield firebase.user(uid).get();
    if (!userResponse.exists) {
      if (role === ROLES.CUSTOMER) {
        yield firebase.user(uid).set({ email, role }, { merge: true });
      } else {
        yield firebase
          .user(uid)
          .set(
            { email, role, firstName, lastName, phone, states },
            { merge: true }
          );
      }
    }
    yield put(actions.signupSuccess(data));
  } catch (e) {
    yield put(actions.signupError(e));
    yield delay(5000);
    yield put(actions.resetAuthMessage());
  }
}

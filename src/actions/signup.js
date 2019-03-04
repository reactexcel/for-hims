import { put } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as actions from "./index";
import { firebase } from "../Firebase";
import * as ROLE from "../constants/roles";
export function* signupRequest(action) {
  const { email, password } = action.payload;
  let { role } = action.payload;
  role = role ? role : ROLE.CUSTOMER;
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
      yield firebase.user(uid).set({ email, role }, { merge: true });
    }
    yield put(actions.signupSuccess(data));
  } catch (e) {
    yield put(actions.signupError(e));
    yield delay(5000);
    yield put(actions.resetAuthMessage());
  }
}

import { put } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* loginRequest(action) {
  const { email, password } = action.payload;
  try {
    const response = yield firebase.userSignIn(email, password);
    const data = {
      displayName: response.user.displayName,
      email: response.user.email,
      phoneNumber: response.user.phoneNumber,
      uid: response.user.uid
    };
    yield put(actions.loginSuccess(data));
  } catch (e) {
    yield put(actions.loginError(e));
    yield delay(5000)
    yield put(actions.resetAuthMessage());
  }
}

export function* logout(action) {
  try {
    const response = yield firebase.userSignOut();
    yield put(actions.logoutSuccess());
  } catch (e) {
    console.log(e);
  }
}

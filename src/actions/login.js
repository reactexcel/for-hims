import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* loginRequest(action) {
  const { email, password } = action.payload;
  try {
    const response = yield firebase.userSignIn(email, password);
    yield put(actions.loginSuccess(response));
  } catch (e) {
    yield put(actions.loginError(e));
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

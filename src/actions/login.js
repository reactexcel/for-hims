import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* loginRequest(action) {
  const { email, password } = action.payload;
  try {
    const response = yield firebase.userSignIn(email, password);
    console.log(response, "response");
    yield put(actions.loginSuccess(response));
  } catch (e) {
    console.log(e, "error");
    yield put(actions.loginError(e));
  }
}

export function* logout(action) {
  localStorage.removeItem("auth");
  yield put(actions.logoutSuccess());
}

import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

//Action fo calling forgot password
export function* forgotpswRequest(action) {
  const { email } = action.payload;
  try {
    yield firebase.userForgotPassword(email);
    yield put(actions.forgotPasswordSuccess());
  } catch (e) {
    yield put(actions.forgotPasswordError(e));
  }
}

//Action for resetting forgot password reducer
export function* forgotpswReset(action) {
  yield put(actions.forgotPasswordResetSuccess());
}

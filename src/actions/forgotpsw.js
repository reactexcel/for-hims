import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* forgotpswRequest(action) {
  const { email } = action.payload;
  try {
    const response = yield firebase.userForgotPassword(email);
    yield put(actions.forgotPasswordSuccess());
  } catch (e) {
    yield put(actions.forgotPasswordError(e));
  }
}

export function* forgotpswReset(action) {
  yield put(actions.forgotPasswordResetSuccess());
}

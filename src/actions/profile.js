import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* resetPasswordRequest(action) {
  const { newPassword: password } = action.payload;
  try {
    yield firebase.userUpdatePassword(password);
    yield put(actions.resetPasswordSuccess("Your Password is resetted"));
  } catch (e) {
    yield put(actions.resetPasswordError(e.message));
  }
}

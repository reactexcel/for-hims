import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* signupRequest(action) {
  const { email, password, termsAndConditions } = action.payload;

  try {
    const response = yield firebase.createUser(email, password);
    const data = {
      displayName: response.user.displayName,
      email: response.user.email,
      phoneNumber: response.user.phoneNumber,
      uid: response.user.uid
    };
    yield put(actions.signupSuccess(data));
  } catch (e) {
    console.log(e, "error");
    yield put(actions.signupError(e));
  }
}

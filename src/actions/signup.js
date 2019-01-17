import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* signupRequest(action) {
  const { email, password, termsAndConditions } = action.payload;

  try {
    const response = yield firebase.createUser(email, password);
    // if (response.keys.length) {
    console.log(response, "response");
    yield put(actions.signupSuccess(response));
    // }
  } catch (e) {
    console.log(e, "error");
    yield put(actions.signupError(e));
  }
}

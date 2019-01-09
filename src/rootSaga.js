import { takeLatest } from "redux-saga/effects";
import * as constants from "./constants";
import { loginRequest, logout } from "./actions/login";
import { signupRequest } from "./actions/signup";

function* watchActions() {
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.LOGOUT_REQUEST, logout);
  yield takeLatest(constants.SIGNUP_REQUEST, signupRequest);
}
export default function* rootSaga() {
  yield [watchActions()];
}

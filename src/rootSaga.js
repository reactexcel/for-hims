import { takeLatest } from "redux-saga/effects";
import * as constants from "./constants";
import { loginRequest, logout } from "./actions/login";
import { signupRequest } from "./actions/signup";
import { forgotpswRequest, forgotpswReset } from "./actions/forgotpsw";
import {
  addToCartRequest,
  removeFromCartRequest
} from "./actions/addremoveCart";

function* watchActions() {
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.LOGOUT_REQUEST, logout);
  yield takeLatest(constants.SIGNUP_REQUEST, signupRequest);
  yield takeLatest(constants.ADD_TO_CART_REQUEST, addToCartRequest);
  yield takeLatest(constants.REMOVE_FROM_CART_REQUEST, removeFromCartRequest);
  yield takeLatest(constants.FORGOT_PASSWORD_REQUEST, forgotpswRequest);
  yield takeLatest(constants.FORGOT_PASSWORD_RESET_REQUEST, forgotpswReset);
}
export default function* rootSaga() {
  yield [watchActions()];
}

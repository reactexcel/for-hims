import { takeLatest } from "redux-saga/effects";
import * as constants from "./constants";
import { loginRequest, logout } from "./actions/login";
import { signupRequest } from "./actions/signup";
import { forgotpswRequest, forgotpswReset } from "./actions/forgotpsw";
import {
  addToCartRequest,
  removeFromCartRequest
} from "./actions/addremoveCart";
import {
  resetPasswordRequest,
  updateProfileRequest,
  getProfileInfoRequest,
  addDateOfBirthRequest,
  addShipingAddressRequest
} from "./actions/profile";
import { sendMessageRequest, getAllMessageRequest } from "./actions/message";
import { getAllOrdersRequest } from "./actions/orders";
import { addNewPaymentRequest } from "./actions/payment";

function* watchActions() {
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.LOGOUT_REQUEST, logout);
  yield takeLatest(constants.SIGNUP_REQUEST, signupRequest);
  yield takeLatest(constants.ADD_TO_CART_REQUEST, addToCartRequest);
  yield takeLatest(constants.REMOVE_FROM_CART_REQUEST, removeFromCartRequest);
  yield takeLatest(constants.FORGOT_PASSWORD_REQUEST, forgotpswRequest);
  yield takeLatest(constants.FORGOT_PASSWORD_RESET_REQUEST, forgotpswReset);
  yield takeLatest(constants.RESET_PASSWORD_REQUEST, resetPasswordRequest);
  yield takeLatest(constants.UPDATE_PROFILE_REQUEST, updateProfileRequest);
  yield takeLatest(constants.GET_PROFILE_INFO_REQUEST, getProfileInfoRequest);
  yield takeLatest(constants.ADD_DATE_OF_BIRTH_REQUEST, addDateOfBirthRequest);
  yield takeLatest(
    constants.ADD_SHIPPING_ADDRESS_REQUEST,
    addShipingAddressRequest
  );
  yield takeLatest(constants.SEND_MESSAGES_REQUEST, sendMessageRequest);
  yield takeLatest(constants.GET_ALL_MESSAGES_REQUEST, getAllMessageRequest);
  yield takeLatest(constants.GET_ALL_ORDERS_REQUEST, getAllOrdersRequest  );
  yield takeLatest(constants.ADDING_PAYMENT_METHOD_REQUEST,addNewPaymentRequest);
}
export default function* rootSaga() {
  yield [watchActions()];
}

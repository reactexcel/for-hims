import { createAction } from "redux-actions";
import * as constants from "../constants";

//actions for user signup
export const signupRequest = createAction(constants.SIGNUP_REQUEST);
export const signupSuccess = createAction(constants.SIGNUP_SUCCESS);
export const signupError = createAction(constants.SIGNUP_ERROR);

//actions for user login
export const loginRequest = createAction(constants.LOGIN_REQUEST);
export const loginSuccess = createAction(constants.LOGIN_SUCCESS);
export const loginError = createAction(constants.LOGIN_ERROR);

//actions for user logout
export const logoutRequest = createAction(constants.LOGOUT_REQUEST);
export const logoutSuccess = createAction(constants.LOGOUT_SUCCESS);

//actions for forgot password
export const forgotPasswordRequest = createAction(
  constants.FORGOT_PASSWORD_REQUEST
);
export const forgotPasswordSuccess = createAction(
  constants.FORGOT_PASSWORD_SUCCESS
);
export const forgotPasswordError = createAction(
  constants.FORGOT_PASSWORD_ERROR
);

//actions for add to cart
export const addToCartRequest = createAction(constants.ADD_TO_CART_REQUEST);
export const addToCartSuccess = createAction(constants.ADD_TO_CART_SUCCESS);
export const addToCartError = createAction(constants.ADD_TO_CART_ERROR);

//export const remove from cart
export const removeFromCartRequest = createAction(
  constants.REMOVE_FROM_CART_REQUEST
);
export const removeFromCartSuccess = createAction(
  constants.REMOVE_FROM_CART_SUCCESS
);
export const removeFromCartError = createAction(
  constants.REMOVE_FROM_CART_ERROR
);

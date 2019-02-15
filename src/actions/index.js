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
//action for reset mesage auth
export const resetAuthMessage = createAction(constants.RESET_AUTH_MESSAGE);
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
export const forgotPasswordResetRequest = createAction(
  constants.FORGOT_PASSWORD_RESET_REQUEST
);
export const forgotPasswordResetSuccess = createAction(
  constants.FORGOT_PASSWORD_RESET_SUCCESS
);

//actions for add to cart
export const addToCartRequest = createAction(constants.ADD_TO_CART_REQUEST);
export const addToCartSuccess = createAction(constants.ADD_TO_CART_SUCCESS);
export const addToCartError = createAction(constants.ADD_TO_CART_ERROR);

//actions for remove from cart
export const removeFromCartRequest = createAction(
  constants.REMOVE_FROM_CART_REQUEST
);
export const removeFromCartSuccess = createAction(
  constants.REMOVE_FROM_CART_SUCCESS
);
export const removeFromCartError = createAction(
  constants.REMOVE_FROM_CART_ERROR
);

//actions for reset password
export const resetPasswordRequest = createAction(
  constants.RESET_PASSWORD_REQUEST
);
export const resetPasswordSuccess = createAction(
  constants.RESET_PASSWORD_SUCCESS
);
export const resetPasswordError = createAction(constants.RESET_PASSWORD_ERROR);

//actions for get profile info
export const getProfileInfoRequest = createAction(
  constants.GET_PROFILE_INFO_REQUEST
);
export const getProfileInfoSuccess = createAction(
  constants.GET_PROFILE_INFO_SUCCESS
);
export const getProfileInfoError = createAction(
  constants.GET_PROFILE_INFO_ERROR
);

//actions for update profile
export const updateProfileRequest = createAction(
  constants.UPDATE_PROFILE_REQUEST
);
export const updateProfileSuccess = createAction(
  constants.UPDATE_PROFILE_SUCCESS
);
export const updateProfileError = createAction(constants.UPDATE_PROFILE_ERROR);

//actions for adding date of birth
export const addDateOfBirthRequest = createAction(
  constants.ADD_DATE_OF_BIRTH_REQUEST
);
export const addDateOfBirthSuccess = createAction(
  constants.ADD_DATE_OF_BIRTH_SUCCESS
);
export const addDateOfBirthError = createAction(
  constants.ADD_DATE_OF_BIRTH_ERROR
);

//actions for shipping address
export const addShippingAddressRequest = createAction(
  constants.ADD_SHIPPING_ADDRESS_REQUEST
);
export const addShippingAddressSuccess = createAction(
  constants.ADD_SHIPPING_ADDRESS_SUCCESS
);
export const addShippingAddressError = createAction(
  constants.ADD_SHIPPING_ADDRESS_ERROR
);

//actions for sending messages
export const sendMessageRequest = createAction(constants.SEND_MESSAGES_REQUEST);
export const sendMessageSuccess = createAction(constants.SEND_MESSAGES_SUCCESS);
export const sendMessageError = createAction(constants.SEND_MESSAGES_ERROR);

//actions for getting all message
export const getAllMessageRequest = createAction(
  constants.GET_ALL_MESSAGES_REQUEST
);
export const getAllMessageSuccess = createAction(
  constants.GET_ALL_MESSAGES_SUCCESS
);
export const getAllMessageError = createAction(
  constants.GET_ALL_MESSAGES_ERROR
);

//actions for adding new payment method
export const addNewPaymentRequest = createAction(
  constants.ADDING_PAYMENT_METHOD_REQUEST
);
export const addNewPaymentSuccess = createAction(
  constants.ADDING_PAYMENT_METHOD_SUCCESS
);
export const addNewPaymentError = createAction(
  constants.ADDING_PAYMENT_METHOD_ERROR
);

//actions for getting all cards
export const getAllCardsRequest = createAction(constants.GET_ALL_CARDS_REQUEST);
export const getAllCardsSuccess = createAction(constants.GET_ALL_CARDS_SUCCESS);
export const getAllCardsError = createAction(constants.GET_ALL_CARDS_ERROR);

//actions for getting all orders
export const getAllOrdersRequest = createAction(
  constants.GET_ALL_ORDERS_REQUEST
);
export const getAllOrdersSuccess = createAction(
  constants.GET_ALL_ORDERS_SUCCESS
);
export const getAllOrdersError = createAction(constants.GET_ALL_ORDERS_ERROR);

//actions for changing status of messages
export const messageReadStatusRequest = createAction(
  constants.MESSAGE_READ_STATUS_REQUEST
);
export const messageReadStatusSuccess = createAction(
  constants.MESSAGE_READ_STATUS_SUCCESS
);
export const messageReadStatusError = createAction(
  constants.MESSAGE_READ_STATUS_ERROR
);

//actions for payment
export const chargeCustomerRequest = createAction(
  constants.CHARGE_CUSTOMER_REQUEST
);
export const chargeCustomerSuccess = createAction(
  constants.CHARGE_CUSTOMER_SUCCESS
);
export const chargeCustomerError = createAction(
  constants.CHARGE_CUSTOMER_ERROR
);

// actions for updating appointment
export const updateAppointmentRequest = createAction(
  constants.UPDATE_APPOINTMENT_REQUEST
);
export const updateAppointmentSuccess = createAction(
  constants.UPDATE_APPOINTMENT_SUCCESS
);
export const updateAppointmentError = createAction(
  constants.UPDATE_APPOINTMENT_ERROR
);

// actions for saving gender
export const saveGenderRequest = createAction(constants.SAVE_GENDER_REQUEST);
export const saveGenderSuccess = createAction(constants.SAVE_GENDER_SUCCESS);
export const saveGenderError = createAction(constants.SAVE_GENDER_ERROR);

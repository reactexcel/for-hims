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

//uploading photo
export const uploadPhotoRequest = createAction(constants.UPLOAD_PHOTO_REQUEST);
export const uploadPhotoSuccess = createAction(constants.UPLOAD_PHOTO_SUCCESS);
export const uploadPhotoError = createAction(constants.UPLOAD_PHOTO_ERROR);

//actions for saving consent
export const savingConsentRequest = createAction(
  constants.SAVE_CONSENT_REQUEST
);
export const savingConsentSuccess = createAction(
  constants.SAVE_CONSENT_SUCCESS
);
export const savingConsentError = createAction(constants.SAVE_CONSENT_ERROR);

//actions for fetching questions
export const fetchQuestionsRequest = createAction(
  constants.FETCH_ALL_QUESTIONS_REQUEST
);
export const fetchQuestionsSuccess = createAction(
  constants.FETCH_ALL_QUESTIONS_SUCCESS
);
export const fetchQuestionsError = createAction(
  constants.FETCH_ALL_QUESTIONS_ERROR
);

//actions for submitting answers
export const submitAnswersRequest = createAction(
  constants.SUBMIT_ANSWERS_REQUEST
);
export const submitAnswersSuccess = createAction(
  constants.SUBMIT_ANSWERS_SUCCESS
);
export const submitAnswersError = createAction(constants.SUBMIT_ANSWERS_ERROR);

//actions for creating user by admin
export const createUserByAdminRequest = createAction(
  constants.CREATE_USER_BY_ADMIN_REQUEST
);
export const createUserByAdminSuccess = createAction(
  constants.CREATE_USER_BY_ADMIN_SUCCESS
);
export const createUserByAdminError = createAction(
  constants.CREATE_USER_BY_ADMIN_ERROR
);

//actions for getting customer details
export const getCustomerDetailRequest = createAction(
  constants.GET_CUSTOMER_DETAIL_REQUEST
);
export const getCustomerDetailSuccess = createAction(
  constants.GET_CUSTOMER_DETAIL_SUCCESS
);
export const getCustomerDetailError = createAction(
  constants.GET_CUSTOMER_DETAIL_ERROR
);

//actions for charge customer after approval
export const chargeCustomerAfterApprovalRequest = createAction(
  constants.CHARGE_CUSTOMER_AFTER_APPROVAL_REQUEST
);
export const chargeCustomerAfterApprovalSuccess = createAction(
  constants.CHARGE_CUSTOMER_AFTER_APPROVAL_SUCCESS
);
export const chargeCustomerAfterApprovalError = createAction(
  constants.CHARGE_CUSTOMER_AFTER_APPROVAL_ERROR
);

//actions for email send to doctor
export const emailSendDoctorRequest = createAction(
  constants.EMAIL_SEND_DOCTOR_REQUEST
);
export const emailSendDoctorSuccess = createAction(
  constants.EMAIL_SEND_DOCTOR_SUCCESS
);
export const emailSendDoctorError = createAction(
  constants.EMAIL_SEND_DOCTOR_ERROR
);

//actions for email send to admin
export const emailSendAdminRequest = createAction(
  constants.EMAIL_SEND_ADMIN_REQUEST
);
export const emailSendAdminSuccess = createAction(
  constants.EMAIL_SEND_ADMIN_SUCCESS
);
export const emailSendAdminError = createAction(
  constants.EMAIL_SEND_ADMIN_ERROR
);

//action to get areawise user
export const areaUserRequest = createAction(
  constants.AREA_USER_REQUEST
);
export const areaUserSuccess = createAction(
  constants.AREA_USER_SUCCESS
);
export const areaUserError = createAction(
  constants.AREA_USER_ERROR
);
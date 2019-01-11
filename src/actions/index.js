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

//actions for dummy data load
export const load = data => ({ type: constants.LOAD, data });

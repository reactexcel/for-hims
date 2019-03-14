import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  auth: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  data: {}
};

const loginRequest = (state, action) =>
  update(state, {
    auth: { $set: false },
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });

const loginSuccess = (state, action) =>
  update(state, {
    auth: { $set: true },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    data: { $set: action.payload }
  });

const loginError = (state, action) =>
  update(state, {
    auth: { $set: false },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload.message },
    data: { $set: {} }
  });

const resetMessage = (state, action) =>
  update(state, { message: { $set: "" } });

export default handleActions(
  {
    [constants.LOGIN_REQUEST]: loginRequest,
    [constants.LOGIN_SUCCESS]: loginSuccess,
    [constants.LOGIN_ERROR]: loginError,

    [constants.SIGNUP_REQUEST]: loginRequest,
    [constants.SIGNUP_SUCCESS]: loginSuccess,
    [constants.SIGNUP_ERROR]: loginError,

    [constants.RESET_AUTH_MESSAGE]: resetMessage
  },
  initialState
);

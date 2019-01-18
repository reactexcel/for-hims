import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
};

const forgotpswRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });

const forgotpswSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });

const forgotpswError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload.message }
  });

const forgotpswReset = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

export default handleActions(
  {
    [constants.FORGOT_PASSWORD_REQUEST]: forgotpswRequest,
    [constants.FORGOT_PASSWORD_SUCCESS]: forgotpswSuccess,
    [constants.FORGOT_PASSWORD_ERROR]: forgotpswError,
    [constants.FORGOT_PASSWORD_RESET_SUCCESS]: forgotpswReset
  },
  initialState
);

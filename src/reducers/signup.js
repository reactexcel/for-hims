import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  auth: false,
  isError: false,
  isSuccess: false,
  isLoading: false
};

const signupRequest = (state, action) =>
  update(state, {
    auth: { $set: false },
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });

const signupSuccess = (state, action) =>
  update(state, {
    auth: { $set: true },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });

const signupError = (state, action) =>
  update(state, {
    auth: { $set: false },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });

export default handleActions(
  {
    [constants.SIGNUP_REQUEST]: signupRequest,
    [constants.SIGNUP_SUCCESS]: signupSuccess,
    [constants.SIGNUP_ERROR]: signupError
  },
  initialState
);

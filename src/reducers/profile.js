import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  resetpsw: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
  },
  userProfile: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    data: {},
    message: ""
  }
};

// for reset password
const resetpswRequest = (state, action) =>
  update(state, {
    resetpsw: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false }
    }
  });

const resetpswSuccess = (state, action) =>
  update(state, {
    resetpsw: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      message: { $set: action.payload }
    }
  });

const resetpswError = (state, action) =>
  update(state, {
    resetpsw: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });

// for profile info
const updateProfileRequest = (state, action) =>
  update(state, {
    userProfile: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false }
    }
  });

const updateProfileSuccess = (state, action) =>
  update(state, {
    userProfile: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      message: { $set: "" },
      data: { $set: action.payload }
    }
  });

const updateProfileError = (state, action) =>
  update(state, {
    userProfile: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });

export default handleActions(
  {
    [constants.RESET_PASSWORD_REQUEST]: resetpswRequest,
    [constants.RESET_PASSWORD_SUCCESS]: resetpswSuccess,
    [constants.RESET_PASSWORD_ERROR]: resetpswError,

    [constants.UPDATE_PROFILE_REQUEST]: updateProfileRequest,
    [constants.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
    [constants.UPDATE_PROFILE_ERROR]: updateProfileError,

    [constants.GET_PROFILE_INFO_REQUEST]: updateProfileRequest,
    [constants.GET_PROFILE_INFO_SUCCESS]: updateProfileSuccess,
    [constants.GET_PROFILE_INFO_ERROR]: updateProfileError,

  },
  initialState
);

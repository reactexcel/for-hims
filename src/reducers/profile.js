import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  resetpsw: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
  }
};

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

export default handleActions(
  {
    [constants.RESET_PASSWORD_REQUEST]: resetpswRequest,
    [constants.RESET_PASSWORD_SUCCESS]: resetpswSuccess,
    [constants.RESET_PASSWORD_ERROR]: resetpswError
  },
  initialState
);

import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  message: "",
  isLoading: false,
  isSuccess: false,
  isError: false
};

const createUserRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

const createUserSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: action.payload }
  });

const createUserError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  });
const resetMessage = (state, action) =>
  update(state, { message: { $set: "" } });

export default handleActions(
  {
    [constants.CREATE_USER_BY_ADMIN_REQUEST]: createUserRequest,
    [constants.CREATE_USER_BY_ADMIN_SUCCESS]: createUserSuccess,
    [constants.CREATE_USER_BY_ADMIN_ERROR]: createUserError,
    [constants.RESET_AUTH_MESSAGE]: resetMessage,
  },
  initialState
);

import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  data: {}
};

const messageRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });

const messageSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    data: { $set: action.payload }
  });

const messageError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  });

export default handleActions(
  {
    [constants.SEND_MESSAGES_REQUEST]: messageRequest,
    [constants.SEND_MESSAGES_SUCCESS]: messageSuccess,
    [constants.SEND_MESSAGES_ERROR]: messageError,

    [constants.GET_ALL_MESSAGES_REQUEST]: messageRequest,
    [constants.GET_ALL_MESSAGES_SUCCESS]: messageSuccess,
    [constants.GET_ALL_MESSAGES_ERROR]: messageError
  },
  initialState
);

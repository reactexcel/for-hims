import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  isAPICalled:false,
  message: "",
  data: [],
  stateUser: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    data: []
  }
};

const messageRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    isAPICalled:{ $set:true},
    message: { $set: "" }
  });

const messageSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    isAPICalled:{ $set:true},
    data: { $set: action.payload },
    message: { $set: "" }
  });

const messageError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    isAPICalled:{ $set:true},
    message: { $set: action.payload }
  });

const areaUserRequest = (state, action) =>
  update(state, {
    stateUser: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false }
    }
  });

const areaUserSuccess = (state, action) =>
  update(state, {
    stateUser: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      data: { $set: action.payload },
      message: { $set: "" }
    }
  });

const areaUserError = (state, action) =>
  update(state, {
    stateUser: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });

export default handleActions(
  {
    [constants.SEND_MESSAGES_REQUEST]: messageRequest,
    [constants.SEND_MESSAGES_SUCCESS]: messageSuccess,
    [constants.SEND_MESSAGES_ERROR]: messageError,

    [constants.GET_ALL_MESSAGES_REQUEST]: messageRequest,
    [constants.GET_ALL_MESSAGES_SUCCESS]: messageSuccess,
    [constants.GET_ALL_MESSAGES_ERROR]: messageError,

    [constants.AREA_USER_REQUEST]: areaUserRequest,
    [constants.AREA_USER_SUCCESS]: areaUserSuccess,
    [constants.AREA_USER_ERROR]: areaUserError
  },
  initialState
);

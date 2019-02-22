import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  data: []
};

const photosRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

const photosSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: action.payload }
  });

const photosError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  });

export default handleActions(
  {
    [constants.UPLOAD_PHOTO_REQUEST]: photosRequest,
    [constants.UPLOAD_PHOTO_SUCCESS]: photosSuccess,
    [constants.UPLOAD_PHOTO_ERROR]: photosError
  },
  initialState
);

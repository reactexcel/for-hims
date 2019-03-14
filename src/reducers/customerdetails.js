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

// for reset password
const getCustomerRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });

const getCustomerSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    data: { $set: action.payload }
  });

const getCustomerError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  });

export default handleActions(
  {
    [constants.GET_CUSTOMER_DETAIL_REQUEST]: getCustomerRequest,
    [constants.GET_CUSTOMER_DETAIL_SUCCESS]: getCustomerSuccess,
    [constants.GET_CUSTOMER_DETAIL_ERROR]: getCustomerError
  },
  initialState
);

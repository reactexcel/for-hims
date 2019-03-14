import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  card: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    data: {}
  },
  charge: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    data: {}
  }
};

const cardRequest = (state, action) =>
  update(state, {
    card: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false },
      message: { $set: "" }
    }
  });

const cardSuccess = (state, action) =>
  update(state, {
    card: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      data: { $set: action.payload },
      message: { $set: "" }
    }
  });

const cardError = (state, action) =>
  update(state, {
    card: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });

const paymentRequest = (state, action) =>
  update(state, {
    charge: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false },
      message: { $set: "" }
    }
  });

const paymentSuccess = (state, action) =>
  update(state, {
    charge: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      data: { $set: action.payload },
      message: { $set: "" }
    }
  });

const paymentError = (state, action) =>
  update(state, {
    charge: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });
export default handleActions(
  {
    [constants.ADDING_PAYMENT_METHOD_REQUEST]: cardRequest,
    [constants.ADDING_PAYMENT_METHOD_SUCCESS]: cardSuccess,
    [constants.ADDING_PAYMENT_METHOD_ERROR]: cardError,

    [constants.GET_ALL_CARDS_REQUEST]: cardRequest,
    [constants.GET_ALL_CARDS_SUCCESS]: cardSuccess,
    [constants.GET_ALL_CARDS_ERROR]: cardError,

    [constants.CHARGE_CUSTOMER_REQUEST]: paymentRequest,
    [constants.CHARGE_CUSTOMER_SUCCESS]: paymentSuccess,
    [constants.CHARGE_CUSTOMER_ERROR]: paymentError
  },
  initialState
);

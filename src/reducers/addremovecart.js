import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  addToCart: false,
  isError: false,
  isSuccess: false,
  isLoading: false
};

const addToCartRequest = (state, action) =>
  update(state, {
    addToCart: { $set: false },
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });

const addToCartSuccess = (state, action) =>
  update(state, {
    addToCart: { $set: true },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });

const addToCartError = (state, action) =>
  update(state, {
    addToCart: { $set: false },
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });

const removeFromCartRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
const removeFromCartSuccess = (state, action) =>
  update(state, {
    addToCart: { $set: false },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });
export default handleActions(
  {
    [constants.ADD_TO_CART_REQUEST]: addToCartRequest,
    [constants.ADD_TO_CART_SUCCESS]: addToCartSuccess,
    [constants.ADD_TO_CART_ERROR]: addToCartError,

    [constants.REMOVE_FROM_CART_REQUEST]: removeFromCartRequest,
    [constants.REMOVE_FROM_CART_SUCCESS]: removeFromCartSuccess
  },
  initialState
);

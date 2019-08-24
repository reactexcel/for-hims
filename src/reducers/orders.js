import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  data: [],
  orderDetail:{}
};
 
const ordersRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

const ordersSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    data: { $set: action.payload },
    message: { $set: "" }
  });

const ordersError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  });

  const orderDetail = (state, action) =>
    update(state, {
      isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
      orderDetail: { $set: action.payload }
    });
  
  
  
  
export default handleActions(
  {
    [constants.GET_ALL_ORDERS_REQUEST]: ordersRequest,
    [constants.GET_ALL_ORDERS_SUCCESS]: ordersSuccess,
    [constants.GET_ALL_ORDERS_ERROR]: ordersError,
    [constants.FETCH_ORDER_DETAIL]:orderDetail
  },
  initialState
);

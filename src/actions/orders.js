import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* getAllOrdersRequest(action) {
  const { uid } = action.payload;
  try {
    const response = yield firebase.userOrders(uid).get();
    yield put(actions.getAllOrdersSuccess(response.docs));
  } catch (e) {
    yield put(actions.getAllOrdersError(e.message));
  }
}

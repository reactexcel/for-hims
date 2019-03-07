import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* getCustomerDetailRequest(action) {
  const { uid } = action.payload;
  try {
    const response = yield firebase.user(uid).get();
    console.log(response,'kjhgvfd');
    if (response.exists) {
      yield put(actions.getCustomerDetailSuccess(response.data()));
    }
  } catch (e) {
    yield put(actions.getCustomerDetailError(e.message));
  }
}

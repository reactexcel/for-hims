import { put } from "redux-saga/effects";
import * as actions from "./index";

export function* addToCartRequest(action) {
  yield put(actions.addToCartSuccess());
}

export function* removeFromCartRequest(action) {
  yield put(actions.removeFromCartSuccess());
}

import { put } from "redux-saga/effects";
import * as actions from "./index";

//For adding product to cart
export function* addToCartRequest(action) {
  yield put(actions.addToCartSuccess());
}

//For removing prduct from cart
export function* removeFromCartRequest(action) {
  yield put(actions.removeFromCartSuccess());
}

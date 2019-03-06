import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";
import * as ROLES from "../constants/roles";

export function* getAllOrdersRequest(action) {
  const { uid, role } = action.payload;
  let response;
  console.log(role)
  try {
    if (role === ROLES.CUSTOMER) {
      response = yield firebase
        .userOrders()
        .where("userId", "==", uid)
        .get();
    } else if (role === ROLES.DOCTOR) {
      response = yield firebase
        .userOrders()
        .where("doctorId", "==", uid)
        .get();
    } else if (role === ROLES.ADMIN) {
      response = yield firebase.userOrders().get();
    }
    console.log(response,'sad')
    yield put(actions.getAllOrdersSuccess(response.docs));
  } catch (e) {
    yield put(actions.getAllOrdersError(e.message));
  }
}

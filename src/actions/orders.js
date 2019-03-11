import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";
import * as ROLES from "../constants/roles";

export function* getAllOrdersRequest(action) {
  const { uid, role } = action.payload;
  let response;
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
        .where("metadata.approvalStatus", "==", "Waiting")
        .get();
    } else if (role === ROLES.ADMIN) {
      response = yield firebase.userOrders().get();
    }
    yield put(actions.getAllOrdersSuccess(response.docs));
  } catch (e) {
    yield put(actions.getAllOrdersError(e.message));
  }
}

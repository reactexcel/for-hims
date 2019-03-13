import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";
import * as ROLES from "../constants/roles";

//Actions for getting orders based on the role of user
//If role is customer, all the orders of that customer will be returned
//If role is doctor, all the orders of the customers whose shipping address
// state is same as that of doctor states will be returned
//If role is admin, all the order will be returned
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

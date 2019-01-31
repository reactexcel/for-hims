import { put, call } from "redux-saga/effects";
import * as actions from "./index";
import axios from "axios";

function customerApi(data) {
  return axios.post(
    "https://us-central1-for-hims-dev.cloudfunctions.net/charge/",
    data
  );
}

export function* addNewPaymentRequest(action) {
  const { uid, token, email, charge } = action.payload;

  try {
    const response = yield call(customerApi, {
      uid,
      token,
      email,
      charge
    });
    if (response.data.statusCode === 200) {
      yield put(actions.addNewPaymentSuccess(response));
    } else {
      const error = JSON.parse(response.data.body).error;
      if (error.code) {
        yield put(actions.addNewPaymentError(error.message));
      } else {
        yield put(actions.addNewPaymentError(error));
      }
    }
  } catch (e) {
    yield put(actions.addNewPaymentError(e.message));
  }
}

import { put, call } from "redux-saga/effects";
import * as actions from "./index";
import axios from "axios";

function addnewPaymentApi(data) {
  // "https://us-central1-noleuderm-d2b6a.cloudfunctions.net/charge/"
  return axios.post(
    "https://us-central1-noleuderm-d2b6a.cloudfunctions.net/payment/addNew",
    data
  );
}

function getAllCardsApi(data) {
  return axios.post(
    "https://us-central1-noleuderm-d2b6a.cloudfunctions.net/payment/getAllCards",
    data
  );
}

export function* addNewPaymentRequest(action) {
  const { uid, token } = action.payload;

  try {
    const response = yield call(addnewPaymentApi, {
      uid,
      token
    });
    if (response.data.statusCode === 200) {
      yield put(actions.addNewPaymentSuccess(JSON.parse(response.data.body)));
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

export function* getAllCardsRequest(action) {
  const { uid } = action.payload;
  try {
    const response = yield call(getAllCardsApi, {
      uid
    });
    if (response.data.statusCode === 200) {
      yield put(
        actions.getAllCardsSuccess({
          ...JSON.parse(response.data.body),
          fetchCards: true
        })
      );
    } else if (response.data.statusCode === 404) {
      yield put(actions.getAllCardsSuccess({ fetchCards: false }));
    }
  } catch (e) {
    yield put(actions.getAllCardsError(e.message));
  }
}

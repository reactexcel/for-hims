import { put, call } from "redux-saga/effects";
import * as actions from "./index";
import axios from "axios";

const url = "https://us-central1-noleuderm-d2b6a.cloudfunctions.net/payment";
function addnewPaymentApi(data) {
  // "https://us-central1-noleuderm-d2b6a.cloudfunctions.net/charge/"
  return axios.post(`${url}/addNew`, data);
}

function getAllCardsApi(data) {
  return axios.post(`${url}/getAllCards`, data);
}

function chargeCustomer(data) {
  return axios.post(`${url}/chargeCustomer`, data);
}

function calculateOrder(data) {
  return axios.post(`${url}/calculateOrder`, data);
}

export function* addNewPaymentRequest(action) {
  const { uid, token, email } = action.payload;
  try {
    const response = yield call(addnewPaymentApi, {
      uid,
      token,
      email
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
          ...JSON.parse(response.data.body)
        })
      );
    } else {
      const error = JSON.parse(response.data.body).error;
      yield put(actions.getAllCardsError(error));
    }
  } catch (e) {
    yield put(actions.getAllCardsError(e.message));
  }
}

export function* chargeCustomerRequest(action) {
  const { uid, address,email } = action.payload;
  try {
    const response = yield call(calculateOrder, { uid, address,email });
    if (response.data.statusCode === 200) {
      const orderId = JSON.parse(response.data.body).order.id;
      const orderResponse = yield call(chargeCustomer, { uid, orderId });
      console.log(orderResponse, "hhhhhhh");
      if (orderResponse.data.statusCode === 200) {
        yield put(
          actions.chargeCustomerSuccess({
            ...JSON.parse(orderResponse.data.body)
          })
        );
      } else {
        const error = JSON.parse(orderResponse.data.body).error;
        console.log(error, "hgfdcxfdghj");

        if (error.code) {
          yield put(actions.chargeCustomerError(error.message));
        } else {
          yield put(actions.chargeCustomerError(error));
        }
      }
    } else {
      const error = JSON.parse(response.data.body).error;
      console.log(error, "jhgfdxcvgh");
      yield put(actions.chargeCustomerError(error));
    }
  } catch (e) {
    yield put(actions.chargeCustomerError(e.message));
  }
}

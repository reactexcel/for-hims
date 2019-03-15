import { put, call } from "redux-saga/effects";
import * as actions from "./index";
import axios from "axios";

/**Base URL for calling our api */
const url = "https://us-central1-noleuderm-d2b6a.cloudfunctions.net/payment";

/**Adds new payment method or cards
 * @param {Object} data
 * @param {string} data.uid user id of the customer same as Document id
 * of users collection in Firebase
 * @param {string} data.token unique token produced by Stripe
 * @param {string} data.email Email of the customer
 */
function addnewPaymentApi(data) {
  return axios.post(`${url}/addNew`, data);
}

/**To get all the cards or payment method of a customer
 * @param {Object} data
 * @param {string} data.uid user id of the customer same as Document id
 * of users collection in Firebase
 */
function getAllCardsApi(data) {
  return axios.post(`${url}/getAllCards`, data);
}

/**To charge a customer
 * @param {Object} data
 * @param {string} data.uid user id of the customer same as Document id
 * of users collection in Firebase
 * @param {string} data.orderId Order id of the order fo which charge will be
 * deducted
 * @param {(string|number)} data.cardId Card id (produced by Stripe) of the
 *  payment method which will be used for chargin customer
 */
function chargeCustomer(data) {
  return axios.post(`${url}/chargeCustomer`, data);
}

/**To calculate total order value with shipping price and taxes
 * @param {Object} data
 * @param {string} data.uid user id of the customer same as Document id
 * of users collection in Firebase
 * @param {Object} data.address Address of customer
 * @param {string} data.email Email address of customer
 * @param {(string|number)} data.cardId Card id (produced by Stripe) of the
 *  payment method which will be used for chargin customer
 */
function calculateOrder(data) {
  return axios.post(`${url}/calculateOrder`, data);
}

//Action for adding a new payment method for a customer
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
      //For managing errors from stripe
      const error = JSON.parse(response.data.body).error;
      if (error.code) {
        yield put(actions.addNewPaymentError(error.message));
      } else {
        yield put(actions.addNewPaymentError(error));
      }
    }
  } catch (e) {
    //For managing errors from Firebase
    yield put(actions.addNewPaymentError(e.message));
  }
}

//Action for getting all the cards or payment method of customer
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
      //for managing errors from our express server
      const error = JSON.parse(response.data.body).error;
      yield put(actions.getAllCardsError(error));
    }
  } catch (e) {
    //for managing errors from firebase
    yield put(actions.getAllCardsError(e.message));
  }
}

//Action for charging a customer for their orders
//First api for calculateOrder will be called, if it is successful
//then the api for charging customer will be called, if the approval status of
//customer for its medication is Approved charges will be deducted
//else if status is Waiting, charges will be deducted after approval by doctor
export function* chargeCustomerRequest(action) {
  const { uid, address, email, cardId } = action.payload;
  try {
    const response = yield call(calculateOrder, {
      uid,
      address,
      email,
      cardId
    });
    console.log(response,'response')
    if (response.data.statusCode === 200) {
      const orderId = JSON.parse(response.data.body).order.id;
      const orderResponse = yield call(chargeCustomer, {
        uid,
        orderId,
        cardId
      });
      console.log(orderResponse,'orderRespons')
      if (orderResponse.data.statusCode === 200) {
        yield put(
          actions.chargeCustomerSuccess({
            ...JSON.parse(orderResponse.data.body)
          })
        );
      } else {
        const error = JSON.parse(orderResponse.data.body).error;
        console.log(error,'orderResponse error')
        if (error.code) {
          yield put(actions.chargeCustomerError(error.message));
        } else {
          yield put(actions.chargeCustomerError(error));
        }
      }
    } else {
      const error = JSON.parse(response.data.body).error;
      console.log(error,'responseerorro')
      yield put(actions.chargeCustomerError(error));
    }
  } catch (e) {
    console.log(e, "error");
    yield put(actions.chargeCustomerError(e.message));
  }
}

//Action for charging customer after approval of medication by Doctor
export function* chargeCustomerAfterApprovalRequest(action) {
  const { uid, orderId, cardId } = action.payload;
  try {
    const response = yield call(chargeCustomer, {
      uid,
      orderId,
      cardId
    });
    if (response.data.statusCode === 200) {
      yield put(
        actions.chargeCustomerAfterApprovalSuccess({
          ...JSON.parse(response.data.body)
        })
      );
    } else {
      //For managing express server or stripe errors
      const error = JSON.parse(response.data.body).error;

      if (error.code) {
        yield put(actions.chargeCustomerAfterApprovalError(error.message));
      } else {
        yield put(actions.chargeCustomerAfterApprovalError(error));
      }
    }
  } catch (e) {
    //For managing firebase errors
    yield put(actions.chargeCustomerAfterApprovalError(e.message));
  }
}

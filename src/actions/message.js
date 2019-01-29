import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* sendMessageRequest(action) {
  const { uid, message } = action.payload;

  try {
    yield firebase.userMessages(uid).add({ message, timestamp: new Date() });
    const resp = yield firebase.userMessages(uid).get();
    yield put(actions.sendMessageSuccess(resp.docs));
  } catch (e) {
    yield put(actions.sendMessageError(e.message));
  }
}

export function* getAllMessageRequest(action) {
  const { uid } = action.payload;
  try {
    const response = yield firebase.userMessages(uid).get();
    yield put(actions.getAllMessageSuccess(response.docs));
  } catch (e) {
    yield put(actions.getAllMessageError(e.message));
  }
}

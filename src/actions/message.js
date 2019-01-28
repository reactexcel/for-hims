import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* sendMessageRequest(action) {
  const { uid, message } = action.payload;

  try {
    const response = yield firebase
      .userMessages(uid)
      .add({ message, timestamp: new Date() });
    const resp = yield firebase.userMessages(uid).get();
    console.log(response, resp, "======", resp.docs[0].data());
    yield put(actions.sendMessageSuccess());
  } catch (e) {
    console.log(e.message, "====");
    yield put(actions.sendMessageError(e.message));
  }
}

export function* getAllMessageRequest(action) {
  const { uid } = action.payload;
  try {
    const response = yield firebase.userMessages(uid).get();
    console.log(response.docs);
    yield put(actions.getAllMessageSuccess());
  } catch (e) {
    yield put(actions.getAllMessageError(e.message));
  }
}

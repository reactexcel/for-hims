import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* fetchQuestionsRequest(action) {
  try {
    const response = yield firebase.fetchQuestions().get();
    yield put(actions.fetchQuestionsSuccess(response));
  } catch (e) {
    yield put(actions.fetchQuestionsError(e.message));
  }
}

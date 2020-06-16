import { call, put, takeLatest } from "redux-saga/effects";
import GithubApi from "../../services/GithubApi";
import { LanguagesActions } from "./actions";
import { GetLanguages, LanguagesTypes } from "./types";

export function languagesWatcher() {
  return takeLatest(LanguagesTypes.ASYNC_GET_DATA, getData);
}

export function* getData(action: GetLanguages) {
  try {
    yield put(LanguagesActions.triggerLoading());
    const jsonResponse = yield call(GithubApi.getLanguages, action.payload);
    yield put(LanguagesActions.setData(jsonResponse));
  } catch (e) {
    yield put(LanguagesActions.failedRequest(e));
  }
}

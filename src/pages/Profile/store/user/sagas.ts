import { call, put, takeLatest } from "redux-saga/effects";
import GithubApi from "../../services/GithubApi";
import { UserActions } from "./actions";
import { GetUser, UserTypes } from "./types";

export function userWatcher() {
  return takeLatest(UserTypes.ASYNC_GET_DATA, getData);
}

export function* getData(action: GetUser) {
  try {
    yield put(UserActions.triggerLoading());
    const jsonResponse = yield call(GithubApi.getUser, action.payload);
    yield put(UserActions.setData(jsonResponse));
  } catch (e) {
    yield put(UserActions.failedRequest(e));
  }
}

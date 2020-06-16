import { call, put, takeLatest } from "redux-saga/effects";
import GithubApi from "../../services/GithubApi";
import { ReposActions } from "./actions";
import { GetRepos, ReposTypes } from "./types";

export function reposWatcher() {
  return takeLatest(ReposTypes.ASYNC_GET_DATA, getData);
}

export function* getData(action: GetRepos) {
  try {
    yield put(ReposActions.triggerLoading());
    const jsonResponse = yield call(GithubApi.getRepos, action.payload);
    yield put(ReposActions.setData(jsonResponse));
  } catch (e) {
    yield put(ReposActions.failedRequest(e));
  }
}

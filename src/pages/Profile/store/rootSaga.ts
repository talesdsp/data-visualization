import { all } from "redux-saga/effects";
import { languagesWatcher } from "./languages/sagas";
import { reposWatcher } from "./repos/sagas";
import { userWatcher } from "./user/sagas";

export default function* rootSaga() {
  yield all([userWatcher(), languagesWatcher(), reposWatcher()]);
}

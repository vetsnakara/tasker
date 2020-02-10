import {fork, take, call, put, takeLatest} from "redux-saga/effects";
import {FETCH_TASKS_STARTED, FETCH_TASKS_SUCCEEDED, FETCH_TASKS_FAILED} from "../actions";
import * as api from "../api";

export default function* rootSaga() {
  yield takeLatest(FETCH_TASKS_STARTED, fetchTasks);
}

function* fetchTasks() {
    try {
    const {data: tasks} = yield call(api.fetchTasks);

    yield put({
      type: FETCH_TASKS_SUCCEEDED,
      payload: {tasks}
    });
  } catch (error) {
    yield put({
      type: FETCH_TASKS_FAILED,
      payload: {
        error: error.message
      }
    });
  }
}
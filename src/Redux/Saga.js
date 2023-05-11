import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  deleteTodoSaga,
  addTodoSaga,
  updateTodoSaga,
  getAllTodoSaga,
} from "./Actions";

export function* onDeleteTodoSaga({ payload: { id } }) {
  yield put(deleteTodoSaga(id));
}

export function* onDelete() {
  yield takeLatest("DELETE_TODO", onDeleteTodoSaga);
}

const fetchTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
};

export function* onGetAllTodoSaga() {
  const todos = yield call(fetchTodos);
  yield put(getAllTodoSaga(todos));
}

export function* onAddTodoSaga({ payload }) {
  yield put(addTodoSaga(payload));
}

export function* onAdd() {
  yield takeLatest("ADD_TODO", onAddTodoSaga);
}

export function* onUpdateTodoSaga({ payload }) {
  yield put(updateTodoSaga(payload));
}

export function* onUpdate() {
  yield takeLatest("UPDATE_TODO", onUpdateTodoSaga);
}

export function* todos() {
  yield all([
    call(onDelete),
    call(onAdd),
    call(onUpdate),
    call(onGetAllTodoSaga),
  ]);
}

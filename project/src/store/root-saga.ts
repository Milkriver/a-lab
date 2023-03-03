import { fork } from "redux-saga/effects";
import { watchProductsSaga } from "./products";

export function* rootSaga() {
    yield fork(watchProductsSaga);
}
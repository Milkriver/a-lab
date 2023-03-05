import { fork } from "redux-saga/effects";
import { watchOrderSaga } from "./order";
import { watchProductsSaga } from "./products";

export function* rootSaga() {
    yield fork(watchProductsSaga);
    yield fork(watchOrderSaga);
}
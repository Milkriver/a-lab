import { createOrder } from './../../api/products';
import { takeLatest, put, select } from 'redux-saga/effects'
import * as Effects from "redux-saga/effects";
import { TDeliveryInfo, TOrder, TOrderPosition } from '../../types';
import { orderActions } from './slice';
import { deliveryInfoSelector, positionsSelector, } from './selectors';
import { getValue, setValue } from '../../lib/localStorage';
import { notificationsActions } from '../notifications';

const call: any = Effects.call;

function* createOrderSaga() {
    try {
        const deliveryInfo: TDeliveryInfo = yield select(deliveryInfoSelector);
        const positions: TOrderPosition[] = yield select(positionsSelector);
        const products = positions.map(x => ({
            id: x.productId,
            totalPrice: x.totalPrice,
            totalCount: x.totalCount,
            color: x.color,
            model: x.model,
            sticketNumber: x.sticketNumber,
        }))

        const order = Object.assign({}, deliveryInfo, {
            products
        }) as TOrder;

        yield call(createOrder, order);
        yield put(notificationsActions.addNotification({
            title: `Заказ успешно создан`,
            badge: 'positive'
        }))
        yield put(orderActions.confirmSuccess());
    } catch (error) {
        yield put(notificationsActions.addNotification({
            title: `Ошибка отправки данных. ${(error as Error).message}`,
            badge: 'negative'
        }))
        yield put(orderActions.confirmFailure())
    }
}

function* initOrderSaga() {
    const positions: TOrderPosition[] = yield call(getValue, 'cart');

    if (positions && positions.length !== 0) {
        const count = positions.reduce((acc, x) => acc + x.totalCount, 0);
        const sum = positions.reduce((acc, x) => acc + x.totalPrice, 0);
        const orderState = {
            positions,
            count,
            sum
        }
        yield put(orderActions.restorePositions(orderState));
    }
}

function* saveLocalOrderSaga() {
    const positions: TOrderPosition[] = yield select(positionsSelector);
    yield call(setValue, 'cart', positions);
}

export function* watchOrderSaga() {
    yield call(initOrderSaga)
    yield takeLatest(orderActions.saveDeliveryInfo.type, createOrderSaga);
    yield takeLatest(orderActions.addItem.type, saveLocalOrderSaga);
    yield takeLatest(orderActions.plusPosition.type, saveLocalOrderSaga);
    yield takeLatest(orderActions.minusPosition.type, saveLocalOrderSaga);
    yield takeLatest(orderActions.dropPosition.type, saveLocalOrderSaga);
    yield takeLatest(orderActions.confirmSuccess.type, saveLocalOrderSaga);
}

import { getDesignProducts, getAlfaMadeProducts, getProduct } from './../../api/products';
import { takeLatest, put, select } from 'redux-saga/effects'
import * as Effects from "redux-saga/effects";
import { TCard, TCardGroup } from '../../types';
import { productsActions } from './slice';
import { cardIdSelector } from './selectors';

const call: any = Effects.call;

function* getProductPreviewSaga() {
    try {
        const products: TCard[] = yield call(getAlfaMadeProducts);
        yield put(productsActions.previewSuccess(products))
    } catch (error) {
        yield put(productsActions.failure())
    }
}

function* getProductDetailSaga() {
    try {
        const products: TCardGroup[] = yield call(getDesignProducts);
        yield put(productsActions.detailSuccess(products))
    } catch (error) {
        yield put(productsActions.failure())
    }
}

export function* getCardSaga() {
    try {
        const cardId: number = yield select(cardIdSelector);
        const product: TCard = yield call(getProduct, cardId);
        yield put(productsActions.cardSuccess(product))
    } catch (error) {
        yield put(productsActions.failure())
    }
}

export function* watchProductsSaga() {
    yield takeLatest(productsActions.cardRequest.type, getCardSaga)
    yield takeLatest(productsActions.previewRequest.type, getProductPreviewSaga)
    yield takeLatest(productsActions.detailRequest.type, getProductDetailSaga)
}

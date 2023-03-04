import { expectSaga } from 'redux-saga-test-plan';
import { call, select } from 'redux-saga/effects';
import { getCardSaga } from './sagas'
import { productsReducer } from './slice';
import { getProduct } from '../../api/products';
import { cardIdSelector } from './selectors';
import { TCard } from '../../types';

describe('Sagas', () => {
  it('should load and store product by id', async () => {
    const productMock: TCard = {
      id: 13,
      preview: 'http://src1',
      images: [
        'http://qa-games.ru/astore/public/images/68519498.jpeg',
        'http://qa-games.ru/astore/public/images/56653281.jpeg'
      ],
      title: 'Футболка Для умных и свободных',
      description: 'Мягкая хлопковая',
      price: 200,
      availability: true
    }

    const initialState = {
      cardId: 13,
      previewProducts: [],
      detailProducts: [],
      isLoading: true,
      hasError: false,
    }

    expectSaga(getCardSaga)
      .withReducer(productsReducer, initialState)
      .provide([
        [select(cardIdSelector), 13],
        [call(getProduct, 13), productMock]
      ])
      .hasFinalState({
        cardId: 13,
        previewProducts: [],
        detailProducts: [],
        isLoading: false,
        hasError: false,
        card: productMock
      })
      .run();
  });

});

import { TCard } from '../../types';
import { productsReducer, productsActions } from './slice';

describe('Reducer: products', () => {
  it('without additional parameters should return initial state', () => {
    expect(productsReducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        previewProducts: [],
        detailProducts: [],
        isLoading: false,
        hasError: false,
      });
  });

  it('should take card request', () => {
    const state = {
      previewProducts: [],
      detailProducts: [],
      isLoading: false,
      hasError: false,
    };

    const action = {
      type: productsActions.cardRequest.type,
      payload: 13
    }

    expect(productsReducer(state, action))
      .toEqual({
        previewProducts: [],
        detailProducts: [],
        isLoading: true,
        hasError: false,
        cardId: 13,
      });
  });

  it('should load card', () => {
    const state = {
      previewProducts: [],
      detailProducts: [],
      isLoading: true,
      hasError: false,
    };

    const cardMock:TCard = {
      id: 1,
      preview: 'http://src1',
      images: [
        'http://src2'
      ],
      title: 'Футболка Для умных и свободных',
      description: 'Мягкая хлопковая',
      price: 200,
      availability: true
    }

    const action = {
      type: productsActions.cardSuccess.type,
      payload: cardMock,
    }

    expect(productsReducer(state, action))
      .toEqual({
        previewProducts: [],
        detailProducts: [],
        isLoading: false,
        hasError: false,
        card: cardMock,
      });
  });
});

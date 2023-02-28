import { ApplicationState } from './../index';

export const previewProductsSelector = (state: ApplicationState) => state.products.previewProducts;
export const detailProductsSelector = (state: ApplicationState) => state.products.detailProducts;
export const cardIdSelector = (state: ApplicationState) => state.products.cardId;
export const cardSelector = (state: ApplicationState) => state.products.card;

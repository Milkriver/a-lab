import { ApplicationState } from './../index';

export const productsSelector = (state: ApplicationState) => state.products;

export const previewProductsSelector = (state: ApplicationState) => productsSelector(state).previewProducts;
export const detailProductsSelector = (state: ApplicationState) => productsSelector(state).detailProducts;
export const cardIdSelector = (state: ApplicationState) => productsSelector(state).cardId;
export const cardSelector = (state: ApplicationState) => productsSelector(state).card;

import { TCard, TCardGroup } from './../../types';
import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit"

type ProductsStateType = {
    previewProducts: TCard[],
    detailProducts: TCardGroup[],
    card?: TCard,
    cardId?: number,
    isLoading: boolean,
    hasError: boolean,
}

const initialState: ProductsStateType = {
    previewProducts: [],
    detailProducts: [],
    isLoading: false,
    hasError: false,
}

const previewRequest: CaseReducer<ProductsStateType> = (state) => {
    state.isLoading = true;
    state.hasError = false;
}

const detailRequest: CaseReducer<ProductsStateType> = (state) => {
    state.isLoading = true;
    state.hasError = false;
}

const cardRequest: CaseReducer<ProductsStateType, PayloadAction<number>> = (state, {payload}) => {
    state.isLoading = true;
    state.hasError = false;
    state.cardId = payload;
}

const previewSuccess: CaseReducer<ProductsStateType, PayloadAction<TCard[]>> = (
    state,
    { payload }
) => {
    state.isLoading = false;
    state.hasError = false;
    state.previewProducts = payload;
}

const detailSuccess: CaseReducer<ProductsStateType, PayloadAction<TCardGroup[]>> = (
    state,
    { payload }
) => {
    state.isLoading = false;
    state.hasError = false;
    state.detailProducts = payload;
}

const cardSuccess: CaseReducer<ProductsStateType, PayloadAction<TCard>> = (
    state,
    { payload }
) => {
    state.isLoading = false;
    state.hasError = false;
    state.card = payload;
}


const failure: CaseReducer<ProductsStateType> = (state) => {
    state.isLoading = false;
    state.hasError = true;
}

export const { actions: productsActions, reducer: productsReducer } = createSlice({
    name: 'products',
    initialState,
    reducers: {
        previewRequest,
        detailRequest,
        cardRequest,
        previewSuccess,
        detailSuccess,
        cardSuccess,
        failure,
    }
})

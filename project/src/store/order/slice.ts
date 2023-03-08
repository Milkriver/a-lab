import { TDeliveryInfo, TOrderItem, TOrderPosition } from './../../types';
import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit"

type OrderStateType = {
    positions: TOrderPosition[],
    sum: number,
    count: number,
    deliveryInfo?: TDeliveryInfo,
    isLoading: boolean,
    hasError: boolean
}

const initialState: OrderStateType = {
    positions: [],
    sum: 0,
    count: 0,
    isLoading: false,
    hasError: false
}

const addItem: CaseReducer<OrderStateType, PayloadAction<TOrderItem>> = (state, { payload: orderItem }) => {
    const positionId = [orderItem.id, orderItem.color, orderItem.model, orderItem.sticketNumber].join('||')
    const items = state.positions.slice();
    const existingPosition = items.find(x => x.id === positionId);

    if (existingPosition) {
        existingPosition.totalCount += 1;
        existingPosition.totalPrice += orderItem.price;
    } else {
        const newPosition = {
            id: positionId,
            totalCount: 1,
            totalPrice: orderItem.price,
            item: orderItem
        }
        items.push(newPosition);
    }

    state.positions = items;
    state.sum += orderItem.price;
    state.count += 1;
}

const minusItem: CaseReducer<OrderStateType, PayloadAction<TOrderPosition>> = (state, { payload: position }) => {
    const lastPosition = position.totalCount === 1;

    if (lastPosition) {
        const items = state.positions.filter(x => x.id !== position.id);
        state.positions = items;
    } else {
        const items = state.positions.slice();
        const existingPosition = items.find(x => x.id === position.id)!
        existingPosition.totalCount -= 1;
        existingPosition.totalPrice -= position.item.price;
        state.positions = items;
    }

    state.sum -= position.item.price;
    state.count -= 1;
}

const dropItem: CaseReducer<OrderStateType, PayloadAction<TOrderPosition>> = (state, { payload: position }) => {
    const items = state.positions.filter(x => x.id !== position.id);

    state.positions = items;
    state.sum -= position.totalPrice;
    state.count -= position.totalCount;
}

const confirmRequest: CaseReducer<OrderStateType> = (state) => {
    state.isLoading = true;
    state.hasError = false;
}

const confirmSuccess: CaseReducer<OrderStateType> = (state) => {
    state.isLoading = false;
    state.hasError = false;
    state.positions = [];
    state.sum = 0;
    state.count = 0;
}

const confirmFailure: CaseReducer<OrderStateType> = (state) => {
    state.isLoading = false;
    state.hasError = true;
}

const restorePositions: CaseReducer<OrderStateType, PayloadAction<Partial<OrderStateType>>> = (state, { payload }) => {
    state = Object.assign(state, payload);
}

const saveDeliveryInfo: CaseReducer<OrderStateType, PayloadAction<TDeliveryInfo>> = (state, { payload }) => {
    state.deliveryInfo = payload;
}

export const { actions: orderActions, reducer: orderReducer } = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem,
        minusItem,
        dropItem,
        confirmRequest,
        confirmSuccess,
        confirmFailure,
        restorePositions,
        saveDeliveryInfo,
    }
})

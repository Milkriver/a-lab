import { ApplicationState } from './../index';

export const orderSelector = (state: ApplicationState) => state.order;

export const positionsSelector = (state: ApplicationState) => orderSelector(state).positions;
export const sumSelector = (state: ApplicationState) => orderSelector(state).sum;
export const countSelector = (state: ApplicationState) => orderSelector(state).count;
export const deliveryInfoSelector = (state: ApplicationState) => orderSelector(state).deliveryInfo;

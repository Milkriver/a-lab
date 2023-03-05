import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { productsReducer } from "./products";
import { orderReducer } from "./order";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        products: productsReducer,
        order: orderReducer
    },
    devTools: true,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { aStoreReducer } from "./a-store";
import { rootSaga } from "./root-saga";
import { TypedUseSelectorHook } from "react-redux/es/types";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
	reducer: {
		aStore: aStoreReducer,
	},
	middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

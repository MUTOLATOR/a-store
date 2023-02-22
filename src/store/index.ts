import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { aStoreReducer } from "./a-store";
import { rootSaga } from "./root-saga";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { loadState, saveState } from "./localStorage";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const persistedState = loadState();

export const store = configureStore({
	reducer: {
		aStore: aStoreReducer,
	},
	middleware: middlewares,
	preloadedState: persistedState,
});

store.subscribe(() => {
	const state = store.getState();
	saveState({
		aStore: {
			madeInAlfaProducts: [],
			ownDesignProducts: [],
			currentProduct: {
				id: 0,
				preview: "",
				images: [""],
				title: "",
				price: 0,
				description: "",
				availability: false,
			},
			isLoading: false,
			hasError: false,
			cart: state.aStore.cart,
			amountInCart: state.aStore.amountInCart,
			totalCost: state.aStore.totalCost,
		},
	});
});

sagaMiddleware.run(rootSaga);

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MadeInAlfaType, OwnDesignType, ProductType } from "types/product";

export type AStoreStateType = {
	madeInAlfaProducts: MadeInAlfaType[];
	ownDesignProducts: OwnDesignType[];
	currentProductId: string;
	currentProduct: ProductType;
	isLoading: boolean;
	hasError: boolean;
};

const initialState: AStoreStateType = {
	madeInAlfaProducts: [],
	ownDesignProducts: [],
	currentProductId: "0",
	currentProduct: {
		images: [""],
		title: "",
		price: 0,
		description: "",
		availability: false,
	},
	isLoading: false,
	hasError: false,
};

const NAME = "a-store";

const requestMadeInAlfa: CaseReducer<AStoreStateType> = (state) => {
	state.isLoading = true;
	state.hasError = false;
};

const requestOwnDesign: CaseReducer<AStoreStateType> = (state) => {
	state.isLoading = true;
	state.hasError = false;
};

const requestProduct: CaseReducer<AStoreStateType, PayloadAction<string>> = (state, { payload }) => {
	state.currentProductId = payload;
	state.isLoading = true;
	state.hasError = false;
};

const successMadeInAlfa: CaseReducer<AStoreStateType, PayloadAction<MadeInAlfaType[]>> = (state, { payload }) => {
	state.isLoading = false;
	state.hasError = false;
	state.madeInAlfaProducts = payload;
};

const successOwnDesign: CaseReducer<AStoreStateType, PayloadAction<OwnDesignType[]>> = (state, { payload }) => {
	state.isLoading = false;
	state.hasError = false;
	state.ownDesignProducts = payload;
};

const successProduct: CaseReducer<AStoreStateType, PayloadAction<ProductType>> = (state, { payload }) => {
	state.isLoading = false;
	state.hasError = false;
	state.currentProduct = payload;
};

const failure: CaseReducer<AStoreStateType> = (state) => {
	state.isLoading = false;
	state.hasError = true;
};

export const { actions: aStoreActions, reducer: aStoreReducer } = createSlice({
	name: NAME,
	initialState: initialState,
	reducers: {
		requestMadeInAlfa,
		requestOwnDesign,
		requestProduct,
		successMadeInAlfa,
		successOwnDesign,
		successProduct,
		failure,
	},
});

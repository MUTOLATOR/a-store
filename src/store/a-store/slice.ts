import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartType, MadeInAlfaType, OwnDesignType, ProductType } from "types/product";

export type AStoreStateType = {
	madeInAlfaProducts: MadeInAlfaType[];
	ownDesignProducts: OwnDesignType[];
	currentProduct: ProductType;
	isLoading: boolean;
	hasError: boolean;
	cart: CartType[];
	amountInCart: number;
	totalCost: number;
};

const initialState: AStoreStateType = {
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
	cart: [],
	amountInCart: 0,
	totalCost: 0,
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
	state.currentProduct.id = payload;
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

const addToCart: CaseReducer<AStoreStateType, PayloadAction<CartType>> = (state, { payload }) => {
	const areOptionsEqual = (options1: any[], options2: any[]) => {
		if (options1.length !== options2.length) return false;
		return options1.every((opt1) => {
			const key1 = Object.keys(opt1)[0];
			const val1 = opt1[key1];
			const opt2 = options2.find((o) => Object.keys(o)[0] === key1);
			return opt2 && opt2[key1] === val1;
		});
	};

	const product = state.cart.find(
		(p) => p.productId === payload.productId && areOptionsEqual(p.productOptions, payload.productOptions)
	);

	if (product) {
		product.amount++;
	} else {
		state.cart.push(payload);
	}
	state.amountInCart++;
	state.totalCost += payload.price;
};

const removeFromCart: CaseReducer<AStoreStateType, PayloadAction<number>> = (state, { payload }) => {
	state.totalCost -= state.cart[payload].amount * state.cart[payload].price;
	state.amountInCart -= state.cart[payload].amount;
	state.cart.splice(payload, 1);
};

const decreaseAmount: CaseReducer<AStoreStateType, PayloadAction<number>> = (state, { payload }) => {
	state.totalCost -= state.cart[payload].price;
	if (state.cart[payload].amount > 1) {
		state.cart[payload].amount--;
		state.amountInCart--;
	} else {
		state.amountInCart--;
		state.cart.splice(payload, 1);
	}
};

const increaseAmount: CaseReducer<AStoreStateType, PayloadAction<number>> = (state, { payload }) => {
	state.amountInCart++;
	state.cart[payload].amount++;
	state.totalCost += state.cart[payload].price;
};

const clearCart: CaseReducer<AStoreStateType> = (state) => {
	state.cart = [];
	state.amountInCart = 0;
	state.totalCost = 0;
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
		addToCart,
		removeFromCart,
		decreaseAmount,
		increaseAmount,
		clearCart,
	},
});

import { PayloadAction } from "@reduxjs/toolkit";
import { getMadeInAlfaProducts, getOwnDesignProducts, getProduct } from "api/a-store";
import { call, put, takeLatest } from "redux-saga/effects";
import { MadeInAlfaType, OwnDesignType, ProductType } from "types/product";
import { aStoreActions } from "./slice";

function* getMadeInAlfaProductsSaga() {
	try {
		const madeInAlfaProducts: MadeInAlfaType[] = yield call(getMadeInAlfaProducts);

		yield put(aStoreActions.successMadeInAlfa(madeInAlfaProducts));
	} catch (error) {
		yield put(aStoreActions.failure());
	}
}

function* getOwnDesignProductsSaga() {
	try {
		const ownDesignProducts: OwnDesignType[] = yield call(getOwnDesignProducts);

		yield put(aStoreActions.successOwnDesign(ownDesignProducts));
	} catch (error) {
		yield put(aStoreActions.failure());
	}
}

function* getProductSaga(action: PayloadAction<string>) {
	try {
		const product: ProductType = yield call(getProduct, action.payload);

		yield put(aStoreActions.successProduct(product));
	} catch (error) {
		yield put(aStoreActions.failure());
	}
}

export function* watchMadeInAlfaSaga() {
	yield takeLatest(aStoreActions.requestMadeInAlfa.type, getMadeInAlfaProductsSaga);
}

export function* watchOwnDesignSaga() {
	yield takeLatest(aStoreActions.requestOwnDesign.type, getOwnDesignProductsSaga);
}

export function* watchProductSaga() {
	yield takeLatest(aStoreActions.requestProduct.type, getProductSaga);
}

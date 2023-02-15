import { all } from "redux-saga/effects";
import { watchMadeInAlfaSaga, watchOwnDesignSaga, watchProductSaga } from "./a-store";

export function* rootSaga() {
	yield all([watchMadeInAlfaSaga(), watchOwnDesignSaga(), watchProductSaga()]);
}

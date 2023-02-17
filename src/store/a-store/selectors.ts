import { ApplicationState } from "store";

export const aStoreSelector = (state: ApplicationState) => state.aStore;

export const madeInAlfaProductsSelector = (state: ApplicationState) => aStoreSelector(state).madeInAlfaProducts;
export const ownDesignProductsSelector = (state: ApplicationState) => aStoreSelector(state).ownDesignProducts;
export const currentProductSelector = (state: ApplicationState) => aStoreSelector(state).currentProduct;
export const isLoadingSelector = (state: ApplicationState) => aStoreSelector(state).isLoading;
export const hasErrorSelector = (state: ApplicationState) => aStoreSelector(state).hasError;
export const cartSelector = (state: ApplicationState) => aStoreSelector(state).cart;
export const amountInCartSelector = (state: ApplicationState) => aStoreSelector(state).amountInCart;
export const totalCostSelector = (state: ApplicationState) => aStoreSelector(state).totalCost;

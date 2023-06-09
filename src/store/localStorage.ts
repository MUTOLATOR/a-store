import { AStoreStateType } from "./a-store";

export const loadState = (): { aStore: AStoreStateType } | undefined => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (state: { aStore: AStoreStateType }) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("state", serializedState);
	} catch (error) {
		// ignore errors
	}
};

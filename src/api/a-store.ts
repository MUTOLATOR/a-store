import axios from "axios";
import { MadeInAlfaType, OwnDesignType, ProductType } from "types/product";

const API_BASE_URL = "http://qa-games.ru/astore";

export const getMadeInAlfaProducts = (): Promise<MadeInAlfaType[]> => {
	return axios.get(`${API_BASE_URL}/made-in-alfa`).then((response) => response.data);
};

export const getOwnDesignProducts = (): Promise<OwnDesignType[]> => {
	return axios.get(`${API_BASE_URL}/your-design`).then((response) => response.data);
};

export const getProduct = (productId: string): Promise<ProductType> => {
	return axios.get(`${API_BASE_URL}/product/${productId}`).then((response) => response.data);
};

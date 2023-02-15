import axios from "axios";

export const getMadeInAlfaProducts = () => {
	return axios.get("http://qa-games.ru/astore/made-in-alfa").then((response) => response.data);
};

export const getOwnDesignProducts = () => {
	return axios.get("http://qa-games.ru/astore/your-design").then((response) => response.data);
};

export const getProduct = (productId: string) => {
	return axios.get(`http://qa-games.ru/astore/product/${productId}`).then((response) => response.data);
};

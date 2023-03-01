export type ProductType = {
	id: number | string;
	preview: string;
	images: string[];
	title: string;
	price: number;
	description: string;
	availability: boolean;
	colors?: string[];
	sizes?: string[];
	models?: string[];
	stickerNumbers?: number[];
};

export type MadeInAlfaType = {
	id: number;
	preview: string;
	title: string;
	description: string;
	price: number;
	availability: boolean;
};

export type OwnDesignType = {
	id: number;
	title: string;
	description: string;
	products: {
		id: number;
		preview: string;
		title: string;
		description: string;
		price: number;
		availability: boolean;
		subtitle: string;
	}[];
};

export type CartType = {
	productId: number | string;
	productImg: string;
	productName: string;
	productOptions: Array<Record<string, string | number | undefined>>;
	amount: number;
	price: number;
};

import { Typography } from "@alfalab/core-components/typography";
import { Amount } from "@alfalab/core-components/amount";
import React from "react";
import "./product-card.css";

type ProductCardType = {
	preview: string;
	title: string;
	subtitle?: string;
	price: number;
	availability: boolean;
};

export const ProductCard = ({ preview, title, subtitle, price, availability }: ProductCardType) => {
	const isInStock = availability ? "в наличии" : "закончились";

	return (
		<div className="product">
			<img className="product-img" src={preview} alt={title} />
			<Typography.Text view="primary-large" weight="bold">
				{title}
			</Typography.Text>
			<Typography.Text view="secondary-medium" weight="bold" color="secondary">
				{subtitle}
			</Typography.Text>
			<Amount value={price} minority={0} currency="RUB" bold="major" />
			<Typography.Text view="primary-large" weight="bold">
				{isInStock}
			</Typography.Text>
		</div>
	);
};

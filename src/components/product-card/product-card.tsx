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

export const ProductCard = ({ preview, title, subtitle, price, availability }: ProductCardType) => (
	<div className="product">
		<img className="product-img" src={preview} alt={title} />
		<Typography.Text view="primary-large" weight="bold">
			{title}
		</Typography.Text>
		{subtitle && (
			<Typography.Text view="secondary-medium" weight="bold" color="secondary">
				{subtitle}
			</Typography.Text>
		)}
		<Amount value={price} minority={0} currency="RUB" bold="major" />
		<Typography.Text view="primary-large" weight="bold">
			{availability ? "в наличии" : "закончились"}
		</Typography.Text>
	</div>
);

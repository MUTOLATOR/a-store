import { Amount } from "@alfalab/core-components/amount";
import { Typography } from "@alfalab/core-components/typography";
import { IconButton } from "@alfalab/core-components/icon-button";
import { PlusMIcon } from "@alfalab/icons/glyph/dist/PlusMIcon";
import { MinusMIcon } from "@alfalab/icons/glyph/dist/MinusMIcon";
import { CrossMIcon } from "@alfalab/icons/glyph/dist/CrossMIcon";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { aStoreActions, cartSelector, madeInAlfaProductsSelector } from "store/a-store";
import { CartType } from "types/product";
import "./cart-card.css";

type CartCardProductType = {
	product: CartType;
};

export const CartCard = ({ product }: CartCardProductType) => {
	const { productId, productImg, productName, productOptions, amount, price } = product;
	const cart = useAppSelector(cartSelector);
	const productIndex = cart.indexOf(product);

	const dispatch = useAppDispatch();

	const handleRemoveClick = () => {
		dispatch(aStoreActions.removeFromCart(productIndex));
	};

	const handleDecreaseClick = () => {
		dispatch(aStoreActions.decreaseAmount(productIndex));
	};

	const handeIncreaseClick = () => {
		dispatch(aStoreActions.increaseAmount(productIndex));
	};

	const madeInAlfaProducts = useAppSelector(madeInAlfaProductsSelector);
	const isMadeinAlfaProduct = madeInAlfaProducts.find((product) => product.id === productId);
	const productLink = isMadeinAlfaProduct ? `/made-in-alfa/${productId}` : `/own-design/${productId}`;
	const linkStyle = { textDecoration: "none", color: "inherit" };

	return (
		<div className="cart-card">
			<img className="cart-card-img" src={productImg} alt={productName} />
			<div className="cart-card-options">
				<Link to={productLink} style={linkStyle}>
					<Typography.Text view="primary-large" weight="bold">
						{productName}
					</Typography.Text>
				</Link>
				{productOptions.map((option, index) => (
					<Typography.Text
						key={`${option}: ${index}`}
						view="secondary-medium"
						weight="bold"
						color="secondary"
					>
						{`${Object.keys(option)[0]}: ${Object.values(option)[0]}`}
					</Typography.Text>
				))}
			</div>
			<div className="cart-card-amount">
				<IconButton className="icon-button" icon={MinusMIcon} size="xxs" onClick={handleDecreaseClick} />
				<Amount value={amount} minority={0} bold="major" />
				<IconButton className="icon-button" icon={PlusMIcon} size="xxs" onClick={handeIncreaseClick} />
			</div>
			<Amount className="cart-card-price" value={price} minority={0} currency="RUB" bold="major" />
			<IconButton className="remove-button" icon={CrossMIcon} size="xxs" onClick={handleRemoveClick} />
		</div>
	);
};

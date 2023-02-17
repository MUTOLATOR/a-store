import { Page } from "components/page";
import "./styles.css";
import data from "data/products.json";
import { useParams } from "react-router-dom";
import { Product } from "components/product";
import { ProductType } from "types/product";
import { useAppDispatch, useAppSelector } from "store";
import { useCallback, useEffect } from "react";
import { aStoreActions, currentProductSelector, hasErrorSelector } from "store/a-store";

export const MadeInAflaProductpage = () => {
	const { productId } = useParams();

	const dispatch = useAppDispatch();
	const hasError = useAppSelector(hasErrorSelector);

	const fetchProductData = useCallback(() => {
		dispatch(aStoreActions.requestProduct(productId as string));
	}, [dispatch, productId]);

	useEffect(() => {
		fetchProductData();
	}, [fetchProductData]);

	let product = useAppSelector(currentProductSelector);
	if (hasError) {
		product = data.products.find((product) => product.id === parseInt(productId as string)) as ProductType;
	}

	const { id, preview, images, title, price, description, availability, colors, sizes, models } = product;

	return (
		<Page>
			<Product
				id={id}
				preview={preview}
				images={images}
				title={title}
				price={price}
				description={description}
				availability={availability}
				colors={colors}
				sizes={sizes}
				models={models}
			/>
		</Page>
	);
};

import { useParams } from "react-router-dom";
import "./styles.css";
//import data from "data/products.json";
import { Page } from "components/page";
import { Product } from "components/product";
import { ProductType } from "types/product";
import { useAppDispatch, useAppSelector } from "store";
import { useCallback, useEffect } from "react";
import { aStoreActions, currentProductSelector } from "store/a-store";

export const OwnDesignProductpage = () => {
	const { productId } = useParams();

	const dispatch = useAppDispatch();

	const fetchProductData = useCallback(() => {
		dispatch(aStoreActions.requestProduct(productId as string));
	}, [dispatch, productId]);

	useEffect(() => {
		fetchProductData();
	}, [fetchProductData]);

	const product = useAppSelector(currentProductSelector);
	//const product = data.customProducts.find((product) => product.id === parseInt(productId as string)); пока оставлю на случай если с апи будет что-то не так
	const { images, title, price, description, availability, colors, sizes, stickerNumbers } = product as ProductType;

	return (
		<Page>
			<Product
				images={images}
				title={title}
				price={price}
				description={description}
				availability={availability}
				colors={colors}
				sizes={sizes}
				stickerNumbers={stickerNumbers}
			/>
		</Page>
	);
};

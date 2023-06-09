import { Space } from "@alfalab/core-components/space";
import { Gap } from "@alfalab/core-components/gap";
import { Typography } from "@alfalab/core-components/typography";
import { Page } from "components/page";
import { ProductCard } from "components/product-card";
import "./styles.css";
import data from "data/products.json";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { aStoreActions, hasErrorSelector, madeInAlfaProductsSelector } from "store/a-store";
import { useCallback, useEffect } from "react";

export const MadeInAflapage = () => {
	const dispatch = useAppDispatch();
	const hasError = useAppSelector(hasErrorSelector);

	const fetchProducts = useCallback(() => {
		dispatch(aStoreActions.requestMadeInAlfa());
	}, [dispatch]);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	let products = useAppSelector(madeInAlfaProductsSelector);
	if (hasError) {
		products = data.products;
	}

	const linkStyle = { textDecoration: "none", color: "inherit" };

	return (
		<Page>
			<div className="made-in-alfapage">
				<Space>
					<Typography.Title tag="h1" view="xlarge" weight="bold">
						Сделано в Альфе
					</Typography.Title>
					<Typography.Text view="primary-large" weight="bold">
						Хотим каждую из этих вещей! Себе, родным и друзьям
					</Typography.Text>
				</Space>
				<Gap size="xl" />
				<div className="products">
					{products.map((product) => (
						<Link to={`/made-in-alfa/${product.id}`} style={linkStyle} key={product.id}>
							<ProductCard
								preview={product.preview}
								title={product.title}
								price={product.price}
								availability={product.availability}
							/>
						</Link>
					))}
				</div>
			</div>
		</Page>
	);
};

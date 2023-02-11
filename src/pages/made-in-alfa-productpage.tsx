import { Page } from "components/page";
import "./styles.css";
import data from "data/products.json";
import { useParams } from "react-router-dom";
import { Product } from "components/product";
import { ProductType } from "components/product/product";

export const MadeInAflaProductpage = () => {
	const { productId } = useParams();
	const product = data.products.find((product) => product.id === parseInt(productId as string));
	const { images, title, price, description, availability, colors, sizes, models } = product as ProductType;

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
				models={models}
			/>
		</Page>
	);
};

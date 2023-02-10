import { Page } from "components/page";
import "./styles.css";
import data from "data/products.json";
import { useParams } from "react-router-dom";
import { Product } from "components/product";

export const MadeInAflaProductpage = () => {
	const { productId } = useParams();
	const product = data.products.find((product) => product.id === parseInt(productId as string));
	const { images, title, price, description, availability, colors, sizes, models } = product || {};

	return (
		<Page>
			<Product
				images={images || []}
				title={title || ""}
				price={price || 0}
				description={description || ""}
				availability={availability || false}
				colors={colors}
				sizes={sizes}
				models={models}
			/>
		</Page>
	);
};

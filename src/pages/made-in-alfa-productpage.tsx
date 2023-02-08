import { Page } from "components/page";
import "./styles.css";
import data from "data/products.json";
import { useParams } from "react-router-dom";

export const MadeInAflaProductpage = () => {
	const { productId } = useParams();
	const product = data.products.find((product) => product.id === parseInt(productId as string));
	const { preview, title } = product || {};

	return (
		<Page>
			<div className="productpage">
				<img className="product-big-img" src={preview} alt={title} />
			</div>
		</Page>
	);
};

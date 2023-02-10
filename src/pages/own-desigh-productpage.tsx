import { useParams } from "react-router-dom";
import "./styles.css";
import data from "data/products.json";
import { Page } from "components/page";
import { Product } from "components/product";

export const OwnDesignProductpage = () => {
	const { productId } = useParams();
	const product = data.customProducts.find((product) => product.id === parseInt(productId as string));
	const { images, title, price, description, availability, colors, sizes, stickerNumbers } = product || {};

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
				stickerNumbers={stickerNumbers}
			/>
		</Page>
	);
};

import { useParams } from "react-router-dom";
import "./styles.css";
import data from "data/products.json";
import { Page } from "components/page";
import { Product } from "components/product";
import { ProductType } from "components/product/product";

export const OwnDesignProductpage = () => {
	const { productId } = useParams();
	const product = data.customProducts.find((product) => product.id === parseInt(productId as string));
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

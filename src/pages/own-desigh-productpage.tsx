import { useParams } from "react-router-dom";
import "./styles.css";
import data from "data/groups.json";
import { Page } from "components/page";
import { useState } from "react";
import { Gap } from "@alfalab/core-components/gap";

export const OwnDesignProductpage = () => {
	const [currentImg, setCurrentImg] = useState(0);

	const { productId } = useParams();
	const products = data.groups
		.map((group) => group.products.find((product) => product.id === parseInt(productId as string)))
		.sort();
	const product = products[0];
	const { title, images } = product || {};
	const imgs = images ? images : "";

	const handleClick = (i: number) => {
		setCurrentImg(i);
	};

	return (
		<Page>
			<div className="productpage">
				<div className="product-imgs">
					<img className="product-big-img" src={imgs[currentImg]} alt={title} />
					<Gap size="xs" />
					<div className="img-picker-block">
						{images?.map((img, index) => (
							<img
								className={index === currentImg ? "img-picker-active" : "img-picker"}
								key={index}
								src={img}
								alt="123"
								onClick={() => handleClick(index)}
							/>
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};

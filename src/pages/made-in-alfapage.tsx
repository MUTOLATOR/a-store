import { Space } from "@alfalab/core-components/space";
import { Gap } from "@alfalab/core-components/gap";
import { Typography } from "@alfalab/core-components/typography";
import { Page } from "components/page";
import { ProductCard } from "components/product-card";
import "./styles.css";
import data from "data/products.json";

export const MadeInAflapage = () => {
	const products = data.products;

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
						<ProductCard
							key={product.id}
							preview="https://static.tildacdn.com/stor6531-3139-4435-b365-653562306137/98058636.jpg"
							title={product.title}
							price={product.price}
							availability={product.availability}
						/>
					))}
				</div>
			</div>
		</Page>
	);
};

import { Page } from "components/page";
import "./styles.css";
import data from "data/groups.json";
import { Space } from "@alfalab/core-components/space";
import { Typography } from "@alfalab/core-components/typography";
import { Gap } from "@alfalab/core-components/gap";
import { ProductCard } from "components/product-card";
import { Link } from "react-router-dom";

export const OwnDesignpage = () => {
	const groups = data.groups;

	return (
		<Page>
			<div className="own-designpage">
				<Space>
					<Typography.Title tag="h1" view="xlarge" weight="bold">
						Свой дизайн
					</Typography.Title>
					<Typography.Text view="primary-large" weight="bold">
						Выберите вещь, а затем — цвет, размер и стикер. Перенесём стикер на вещь как на фото
					</Typography.Text>
				</Space>
				<Gap size="xl" />
				<div className="groups">
					<Space>
						{groups.map((group) => (
							<div className="group" key={group.id}>
								<Typography.Title tag="h1" view="xlarge" weight="bold" color="accent">
									{group.title}
								</Typography.Title>
								<Typography.Text view="primary-large" weight="bold">
									{group.description}
								</Typography.Text>
								<div className="products">
									{group.products.map((product) => (
										<Link
											to={`/own-design/${product.id}`}
											style={{ textDecoration: "none", color: "inherit" }}
											key={product.id}
										>
											<ProductCard
												preview={product.preview}
												title={product.title}
												subtitle={product.subtitle}
												price={product.price}
												availability={product.availability}
											/>
										</Link>
									))}
								</div>
							</div>
						))}
					</Space>
				</div>
			</div>
		</Page>
	);
};

import { Gap } from "@alfalab/core-components/gap";
import { Typography } from "@alfalab/core-components/typography";
import { Page } from "components/page";
import { useAppDispatch, useAppSelector } from "store";
import { aStoreActions, madeInAlfaProductsSelector } from "store/a-store";
import { MadeInAlfaCard } from "components/made-in-alfa-card";
import { useEffect } from "react";
import "./styles.css";

export const MadeInAlfapage = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector(madeInAlfaProductsSelector);

	useEffect(() => {
		dispatch(aStoreActions.requestMadeInAlfa());
	}, [dispatch]);

	return (
		<Page>
			<div className="madeinalfapage">
				<Gap size="xl" />
				<Typography.Title tag="h1" weight="bold">
					Сделано в Альфе
				</Typography.Title>
				<Gap size="xl" />
				<div className="madeinalfapage-cards">
					{products.map((product) => (
						<MadeInAlfaCard
							key={product.id}
							id={product.id}
							preview={product.preview}
							title={product.title}
							price={product.price}
						/>
					))}
				</div>
			</div>
		</Page>
	);
};

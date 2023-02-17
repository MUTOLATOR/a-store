import React, { PropsWithChildren, useEffect, useState } from "react";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { useAppSelector } from "store";
import { amountInCartSelector, cartSelector, isLoadingSelector, totalCostSelector } from "store/a-store";
import { Spinner } from "@alfalab/core-components/spinner";
import { SupermarketTrolleyMIcon } from "@alfalab/icons/glyph/dist/SupermarketTrolleyMIcon";
import { Circle } from "@alfalab/core-components/icon-view/circle";
import { Badge } from "@alfalab/core-components/badge";
import { SidePanelResponsive } from "@alfalab/core-components/side-panel";
import { Divider } from "@alfalab/core-components/divider";
import "./page.css";
import { CartCard } from "components/cart-card";
import { Gap } from "@alfalab/core-components/gap";
import { Typography } from "@alfalab/core-components/typography";
import { Amount } from "@alfalab/core-components/amount";

export const Page = ({ children }: PropsWithChildren) => {
	const isLoading = useAppSelector(isLoadingSelector);
	const cart = useAppSelector(cartSelector);
	const amountInCart = useAppSelector(amountInCartSelector);
	const totalCost = useAppSelector(totalCostSelector);

	useEffect(() => {
		if (amountInCart === 0) {
			setIsOpen(false);
		}
	}, [amountInCart]);

	const [isOpen, setIsOpen] = useState(false);
	const handleModalOpen = () => setIsOpen(!isOpen);

	return (
		<div className="page">
			<Header />
			{amountInCart > 0 && (
				<>
					<div onClick={handleModalOpen}>
						<Circle
							className="cart-button"
							backgroundColor="red"
							bottomAddons={<Badge view="count" content={amountInCart} />}
						>
							<SupermarketTrolleyMIcon color="white" />
						</Circle>
					</div>
					<SidePanelResponsive className="cart-side-panel" open={isOpen} onClose={handleModalOpen}>
						<SidePanelResponsive.Header hasCloser={true}>Ваш Заказ</SidePanelResponsive.Header>
						<SidePanelResponsive.Content>
							<Divider />
							{cart.map((product, index) => (
								<CartCard key={index} product={product} />
							))}
							<Gap size="xl" />
							<Divider />
							<Gap size="xl" />
							<div className="cart-side-panel-total-cost">
								<Typography.Text view="primary-large" weight="bold">
									Сумма:
								</Typography.Text>
								<Amount value={totalCost} minority={0} currency="RUB" bold="full" />
							</div>
						</SidePanelResponsive.Content>
					</SidePanelResponsive>
				</>
			)}
			{isLoading ? <Spinner visible={true} /> : children}
			<Footer />
		</div>
	);
};

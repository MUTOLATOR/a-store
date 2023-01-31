import React, { useState } from "react";
import { Typography } from "@alfalab/core-components/typography";
import { ListMIcon } from "@alfalab/icons/glyph/dist/ListMIcon";
import { Drawer } from "@alfalab/core-components/drawer";
import { Space } from "@alfalab/core-components/space";
import "./header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleHomepageClick = () => {
		navigate("/");
	};

	const handleMadeInAlfapageClick = () => {
		navigate("/made-in-alfa");
	};

	const handleOwnDesignpageClick = () => {
		navigate("/own-design");
	};

	const handleContactUspagaClick = () => {
		navigate("/contact-us");
	};

	const handleDrawerOpen = () => setDrawerOpen(!drawerOpen);

	return (
		<div className="header">
			<Typography.Title tag="h1" className="home" color="accent" view="small" onClick={handleHomepageClick}>
				A-Store
			</Typography.Title>
			<div className="menu" onClick={handleDrawerOpen}>
				<ListMIcon />
				<Typography.Title tag="h2" view="small">
					меню
				</Typography.Title>
				<Drawer open={drawerOpen} className="drawer">
					<Space>
						<Typography.Title
							tag="h3"
							className="drawer-menu"
							color="primary-inverted"
							font="system"
							onClick={handleMadeInAlfapageClick}
						>
							Сделано в Альфе
						</Typography.Title>
						<Typography.Title
							tag="h3"
							className="drawer-menu"
							color="primary-inverted"
							font="system"
							onClick={handleOwnDesignpageClick}
						>
							Свой дизайн
						</Typography.Title>
						<Typography.Title
							tag="h3"
							className="drawer-menu"
							color="primary-inverted"
							font="system"
							onClick={handleContactUspagaClick}
						>
							Контакты
						</Typography.Title>
					</Space>
				</Drawer>
			</div>
		</div>
	);
};

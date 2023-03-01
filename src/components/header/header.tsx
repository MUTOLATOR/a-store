import React, { useState } from "react";
import { Typography } from "@alfalab/core-components/typography";
import { ListMIcon } from "@alfalab/icons/glyph/dist/ListMIcon";
import { Drawer } from "@alfalab/core-components/drawer";
import { Space } from "@alfalab/core-components/space";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleDrawerOpen = () => setDrawerOpen(!drawerOpen);

	const linkStyle = { textDecoration: "none", color: "inherit" };

	return (
		<div className="header">
			<Link to="/" style={linkStyle}>
				<Typography.Title tag="h1" className="home" color="accent" view="small">
					A-Store
				</Typography.Title>
			</Link>
			<div className="menu" onClick={handleDrawerOpen}>
				<ListMIcon />
				<Typography.Title tag="h2" view="small">
					меню
				</Typography.Title>
				<Drawer open={drawerOpen} className="drawer">
					<Space>
						<Link to="/made-in-alfa" style={linkStyle}>
							<Typography.Title tag="h3" className="drawer-menu" color="primary-inverted" font="system">
								Сделано в Альфе
							</Typography.Title>
						</Link>
						<Link to="/own-design" style={linkStyle}>
							<Typography.Title tag="h3" className="drawer-menu" color="primary-inverted" font="system">
								Свой дизайн
							</Typography.Title>
						</Link>
						<Link to="/contact-us" style={linkStyle}>
							<Typography.Title tag="h3" className="drawer-menu" color="primary-inverted" font="system">
								Контакты
							</Typography.Title>
						</Link>
					</Space>
				</Drawer>
			</div>
		</div>
	);
};

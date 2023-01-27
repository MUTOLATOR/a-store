import React from "react";
import { Typography } from "@alfalab/core-components/typography";
import { ListMIcon } from "@alfalab/icons/glyph/dist/ListMIcon";
import "./header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/");
	};

	return (
		<div className="header">
			<Typography.Title tag="h1" color="accent" view="small" onClick={handleClick}>
				A-Store
			</Typography.Title>
			<div className="menu">
				<ListMIcon />
				<Typography.Title tag="h2" view="small">
					меню
				</Typography.Title>
			</div>
		</div>
	);
};

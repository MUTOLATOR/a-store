import React from "react";
import { Typography } from "@alfalab/core-components/typography";
import "./footer.css";

export const Footer = () => {
	return (
		<div className="footer">
			<Typography.Text view="secondary-medium" color="secondary">
				© ООО «Альфа Фьюче Пипл», 2023
			</Typography.Text>
		</div>
	);
};

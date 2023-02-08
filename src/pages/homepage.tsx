import { Page } from "components/page";
import { Typography } from "@alfalab/core-components/typography";
import "./styles.css";
import { Link } from "react-router-dom";

export const Homepage = () => {
	return (
		<Page>
			<div className="homepage">
				<Link to="/made-in-alfa" style={{ textDecoration: "none", color: "inherit" }}>
					<div className="homepage-block">
						<img className="homepage-img" src={require("imgs/Made_in_Alfa.jpeg")} alt="Сделано в Альфа" />
						<Typography.Title tag="h1" className="homepage-block-text" font="system">
							Сделано в Альфе
						</Typography.Title>
					</div>
				</Link>
				<Link to="/own-design" style={{ textDecoration: "none", color: "inherit" }}>
					<div className="homepage-block">
						<img className="homepage-img" src={require("imgs/Own_design.jpeg")} alt="Свой дизайн" />
						<Typography.Title tag="h1" className="homepage-block-text" font="system">
							Свой дизайн
						</Typography.Title>
					</div>
				</Link>
			</div>
		</Page>
	);
};

import { Page } from "components/page";
import { Typography } from "@alfalab/core-components/typography";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
	const navigate = useNavigate();

	const handleMadeInAlfaClick = () => {
		navigate("/made-in-alfa");
	};

	const handleOwnDesignClick = () => {
		navigate("/own-design");
	};

	return (
		<Page>
			<div className="homepage">
				<div className="homepage-block" onClick={handleMadeInAlfaClick}>
					<img src={require("imgs/Made_in_Alfa.jpeg")} alt="Сделано в Альфа" />
					<Typography.Title tag="h1" className="homepage-block-text" font="system">
						Сделано в Альфе
					</Typography.Title>
				</div>
				<div className="homepage-block" onClick={handleOwnDesignClick}>
					<img src={require("imgs/Own_design.jpeg")} alt="Свой дизайн" />
					<Typography.Title tag="h1" className="homepage-block-text" font="system">
						Свой дизайн
					</Typography.Title>
				</div>
			</div>
		</Page>
	);
};

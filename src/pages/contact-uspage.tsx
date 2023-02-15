import { Page } from "components/page";
import { useEffect } from "react";

export const ContactUspage = () => {
	useEffect(() => {
		throw new Error(); //временно просто проверить что ErrorBoundary работает
	});

	return <Page />;
};

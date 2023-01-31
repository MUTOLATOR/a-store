import React, { PropsWithChildren } from "react";
import { Footer } from "components/footer";
import { Header } from "components/header";

export const Page = ({ children }: PropsWithChildren) => {
	return (
		<div className="page">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

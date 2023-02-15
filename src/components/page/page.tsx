import React, { PropsWithChildren } from "react";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { useAppSelector } from "store";
import { isLoadingSelector } from "store/a-store";
import { Spinner } from "@alfalab/core-components/spinner";

export const Page = ({ children }: PropsWithChildren) => {
	const isLoading = useAppSelector(isLoadingSelector);

	return (
		<div className="page">
			<Header />
			{isLoading ? <Spinner visible={true} /> : children}
			<Footer />
		</div>
	);
};

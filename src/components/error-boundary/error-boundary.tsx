import { Space } from "@alfalab/core-components/space";
import { Typography } from "@alfalab/core-components/typography";
import React, { Component, ReactNode } from "react";
import "./error-boundary.css";

type Props = {
	children?: ReactNode;
};

type State = {
	hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
	state: State = {
		hasError: false,
	};

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<Space className="error-boundary" direction="vertical" size={20}>
					<Typography.Title tag="h1">Что-то пошло не так. Попробуйте зайти позднее.</Typography.Title>
				</Space>
			);
		}

		return this.props.children;
	}
}

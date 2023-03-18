import { ErrorBoundary } from "components/error-boundary";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import { HashRouter as BrowserRouter } from "react-router-dom"; // для публикации на github.pages
import { store } from "store";
import { App } from "./components/app";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<ErrorBoundary>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</ErrorBoundary>
);

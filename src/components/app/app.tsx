import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Homepage } from "pages/homepage";
import { Cartpage } from "pages/cartpage";
import { ContactUspage } from "pages/contact-uspage";
import { MadeInAflapage } from "pages/made-in-alfa";
import { OwnDesignpage } from "pages/own-design";

export const App = () => (
	<div className="app">
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/cart" element={<Cartpage />} />
			<Route path="/contact-us" element={<ContactUspage />} />
			<Route path="/made-in-alfa" element={<MadeInAflapage />} />
			<Route path="/own-design" element={<OwnDesignpage />} />
		</Routes>
	</div>
);

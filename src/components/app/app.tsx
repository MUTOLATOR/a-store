import React from "react";
import { Routes, Route } from "react-router-dom";

import { Homepage } from "pages/home-page";
import { Cartpage } from "pages/cart-page";
import { ContactUspage } from "pages/contact-us-page";
import { MadeInAlfapage } from "pages/made-in-alfa-page";
import { OwnDesignpage } from "pages/own-design-page";
import { OwnDesignProductpage } from "pages/own-design-product-page";
import { MadeInAlfaProductpage } from "pages/made-in-alfa-product-page";

export const App = () => (
	<div className="app">
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/cart" element={<Cartpage />} />
			<Route path="/contact-us" element={<ContactUspage />} />
			<Route path="/made-in-alfa" element={<MadeInAlfapage />} />
			<Route path="/made-in-alfa/:productId" element={<MadeInAlfaProductpage />} />
			<Route path="/own-design" element={<OwnDesignpage />} />
			<Route path="/own-design/:productId" element={<OwnDesignProductpage />} />
		</Routes>
	</div>
);

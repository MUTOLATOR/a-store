import React from "react";
import { Routes, Route } from "react-router-dom";

import { Homepage } from "pages/homepage";
import { Cartpage } from "pages/cartpage";
import { ContactUspage } from "pages/contact-uspage";
import { MadeInAflapage } from "pages/made-in-alfapage";
import { OwnDesignpage } from "pages/own-designpage";
import { OwnDesignProductpage } from "pages/own-desigh-productpage";
import { MadeInAflaProductpage } from "pages/made-in-alfa-productpage";

export const App = () => (
	<div className="app">
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/cart" element={<Cartpage />} />
			<Route path="/contact-us" element={<ContactUspage />} />
			<Route path="/made-in-alfa" element={<MadeInAflapage />} />
			<Route path="/made-in-alfa/:productId" element={<MadeInAflaProductpage />} />
			<Route path="/own-design" element={<OwnDesignpage />} />
			<Route path="/own-design/:productId" element={<OwnDesignProductpage />} />
		</Routes>
	</div>
);

import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "components/app";
import { MadeInAflapage } from "pages/made-in-alfapage";
import { BrowserRouter } from "react-router-dom";

test("Should have menu", async () => {
	render(<App />, { wrapper: BrowserRouter });
	await screen.findByText("меню");
});

test("Menu should have Contacts on click", async () => {
	render(<App />, { wrapper: BrowserRouter });
	(await screen.findByText("меню")).click();
	await screen.findByText("Контакты");
});

test("Working navigation", async () => {
	render(<App />, { wrapper: BrowserRouter });
	(await screen.findByText("Сделано в Альфе")).click();
	await screen.findByText("Хотим каждую из этих вещей! Себе, родным и друзьям");
});

test("Should have 5 products", () => {
	const { container } = render(<MadeInAflapage />, { wrapper: BrowserRouter });
	const products = container.getElementsByClassName("product");
	expect(products.length).toBe(5);
});

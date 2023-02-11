import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "components/app";
import { MadeInAflapage } from "pages/made-in-alfapage";
import { BrowserRouter } from "react-router-dom";
import { OwnDesignpage } from "pages/own-designpage";

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

test("Made in Alfa Should have 5 products", () => {
	const { container } = render(<MadeInAflapage />, { wrapper: BrowserRouter });
	const products = container.getElementsByClassName("product");
	expect(products.length).toBe(5);
});

test("Own design should have 3 groups and 9 products", () => {
	const { container } = render(<OwnDesignpage />, { wrapper: BrowserRouter });
	const groups = container.getElementsByClassName("group");
	const products = container.getElementsByClassName("product");
	expect(groups.length).toBe(3);
	expect(products.length).toBe(9);
});

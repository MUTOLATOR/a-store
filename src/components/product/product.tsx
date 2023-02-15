import { Amount } from "@alfalab/core-components/amount";
import { Gap } from "@alfalab/core-components/gap";
import { Typography } from "@alfalab/core-components/typography";
import { Select, SelectProps } from "@alfalab/core-components/select";
import { Button } from "@alfalab/core-components/button";
import React, { useEffect, useState } from "react";
import "./product.css";
import { ProductType } from "types/product";

export const Product = ({
	images,
	title,
	price,
	description,
	availability,
	colors,
	sizes,
	models,
	stickerNumbers,
}: ProductType) => {
	const [currentImg, setCurrentImg] = useState(0);
	const [colorOptions, setColorOptions] = useState([{ key: "", content: "" }]);
	const [sizeOptions, setSizeOptions] = useState([{ key: "", content: "" }]);
	const [modelOptions, setModelOptions] = useState([{ key: "", content: "" }]);
	const [stickerOptions, setStickerOptions] = useState([{ key: "", content: "" }]);
	const [selectedColor, setSelectedColor] = useState<SelectProps["selected"]>({ key: "", content: "" });
	const [selectedSize, setSelectedSize] = useState<SelectProps["selected"]>({ key: "", content: "" });
	const [selectedModel, setSelectedModel] = useState<SelectProps["selected"]>({ key: "", content: "" });
	const [selectedSticker, setSelectedSticker] = useState<SelectProps["selected"]>({ key: "", content: "" });

	useEffect(() => {
		if (colors) {
			const colorOptions = colors.map((color, index) => {
				return {
					key: `${index + 1}`,
					content: color,
				};
			});
			setColorOptions(colorOptions);
			setSelectedColor(colorOptions[0]);
		}

		if (sizes) {
			const sizeOptions = sizes.map((size, index) => {
				return {
					key: `${index + 1}`,
					content: size,
				};
			});
			setSizeOptions(sizeOptions);
			setSelectedSize(sizeOptions[0]);
		}

		if (models) {
			const modelOptions = models.map((model, index) => {
				return {
					key: `${index + 1}`,
					content: model,
				};
			});
			setModelOptions(modelOptions);
			setSelectedModel(modelOptions[0]);
		}

		if (stickerNumbers) {
			const stickerOptions = stickerNumbers.map((sticker, index) => {
				return {
					key: `${index + 1}`,
					content: `${sticker}`,
				};
			});
			setStickerOptions(stickerOptions);
			setSelectedSticker(stickerOptions[0]);
		}
	}, [colors, models, sizes, stickerNumbers]);

	const handleClick = (i: number) => {
		setCurrentImg(i);
	};

	const handleChangeColor: SelectProps["onChange"] = ({ selected }) => {
		setSelectedColor(selected);
	};
	const handleChangeSize: SelectProps["onChange"] = ({ selected }) => {
		setSelectedSize(selected);
	};
	const handleChangeModel: SelectProps["onChange"] = ({ selected }) => {
		setSelectedModel(selected);
	};
	const handleChangeSticker: SelectProps["onChange"] = ({ selected }) => {
		setSelectedSticker(selected);
	};

	return (
		<div className="productpage">
			<div className="product-imgs">
				<img className="product-big-img" src={images[currentImg]} alt={title} />
				<Gap size="xs" />
				<div className="img-picker-block">
					{images.map((img, index) => (
						<img
							key={index}
							className={index === currentImg ? "img-picker-active" : "img-picker"}
							src={img}
							alt=""
							onClick={() => handleClick(index)}
						/>
					))}
				</div>
			</div>
			<div className="product-options">
				<Typography.Text view="primary-large" weight="bold">
					{title}
				</Typography.Text>
				<Amount value={price} minority={0} currency="RUB" bold="major" />
				{colors && (
					<div className="product-options-color">
						<Typography.Text view="secondary-medium" weight="bold">
							цвет
						</Typography.Text>
						<Select
							options={colorOptions}
							selected={selectedColor}
							onChange={handleChangeColor}
							size="s"
							optionsSize="s"
						/>
					</div>
				)}
				{sizes && (
					<div className="product-options-size">
						<Typography.Text view="secondary-medium" weight="bold">
							размер
						</Typography.Text>
						<Select
							options={sizeOptions}
							selected={selectedSize}
							onChange={handleChangeSize}
							size="s"
							optionsSize="s"
						/>
					</div>
				)}
				{models && (
					<div className="product-options-model">
						<Typography.Text view="secondary-medium" weight="bold">
							модель
						</Typography.Text>
						<Select
							options={modelOptions}
							selected={selectedModel}
							onChange={handleChangeModel}
							size="s"
							optionsSize="s"
						/>
					</div>
				)}
				{stickerNumbers && (
					<div className="product-options-sticker">
						<Typography.Text view="secondary-medium" weight="bold">
							номер стикера
						</Typography.Text>
						<Select
							options={stickerOptions}
							selected={selectedSticker}
							onChange={handleChangeSticker}
							size="s"
							optionsSize="s"
						/>
					</div>
				)}
				<Typography.Text view="secondary-medium" weight="bold">
					{description}
				</Typography.Text>
				<Typography.Text view="primary-large" weight="bold">
					{availability ? "в наличии" : "закончились"}
				</Typography.Text>
				<Button disabled={!availability} view="primary">
					В корзину
				</Button>
			</div>
		</div>
	);
};

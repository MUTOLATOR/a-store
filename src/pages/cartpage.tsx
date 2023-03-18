import { CustomButton } from "@alfalab/core-components/custom-button";
import { Gap } from "@alfalab/core-components/gap";
import { Input } from "@alfalab/core-components/input";
import { PhoneInput } from "@alfalab/core-components/phone-input";
import { Typography } from "@alfalab/core-components/typography";
import { RadioGroup, RadioGroupProps } from "@alfalab/core-components/radio-group";
import { Radio } from "@alfalab/core-components/radio";
import { Checkbox } from "@alfalab/core-components/checkbox";
import { Textarea } from "@alfalab/core-components/textarea";
import { Page } from "components/page";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { amountInCartSelector, aStoreActions, cartSelector, totalCostSelector } from "store/a-store";
import { Amount } from "@alfalab/core-components/amount";
import { Divider } from "@alfalab/core-components/divider";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import emptyCartImg from "imgs/empty-cart.png";

export const Cartpage = () => {
	const amountInCart = useAppSelector(amountInCartSelector);
	const cost = useAppSelector(totalCostSelector);
	const cart = useAppSelector(cartSelector);

	const [fioValue, setFioValue] = useState("");
	const [fioError, setFioError] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [emailError, setEmailError] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [phoneError, setPhoneError] = useState("");
	const [addressValue, setAddressValue] = useState("");
	const [deliveryCost, setDeliveryCost] = useState("350");
	const [checked, setChecked] = useState(false);
	const [checkedError, setCheckedError] = useState("");
	const [commentValue, setCommentValue] = useState("");
	const [isOrderMade, setIsOrderMade] = useState(false);
	const [orderError, setOrderError] = useState(false);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const regexp = /\S+@\S+\.\S+/;
	const isValidEmail = (email: string) => {
		return regexp.test(email);
	};

	const onFioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFioValue(e.target.value);
		setFioError("");
	};

	const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailValue(e.target.value);
		setEmailError("");
	};

	const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhoneValue(e.target.value);
		setPhoneError("");
	};

	const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAddressValue(e.target.value);
	};

	const onDeliveryChange: RadioGroupProps["onChange"] = (_, payload) => {
		setDeliveryCost(payload?.value as string);
	};

	const handleChangeCkecked = () => {
		setChecked(!checked);
		setCheckedError("");
	};

	const onCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCommentValue(e.target.value);
	};

	const validate = () => {
		if (!fioValue) {
			setFioError("Пожалуйста, заполните все обязательные поля");
		}
		if (!emailValue) {
			setEmailError("Пожалуйста, заполните все обязательные поля");
		} else if (!isValidEmail(emailValue)) {
			setEmailError("Пожалуйста, укажите корректный email");
		}
		if (!phoneValue) {
			setPhoneError("Пожалуйста, заполните все обязательные поля");
		} else if (phoneValue.length !== 16) {
			setPhoneError("Пожалуйста, укажите корректный телефон");
		}
		if (!checked) {
			setCheckedError("Пожалуйста, согласитесь на обработку персональных данных");
		}
		if (
			!fioError &&
			!emailError &&
			!phoneError &&
			!checkedError &&
			fioValue &&
			emailValue &&
			phoneValue &&
			checked
		) {
			setOrderError(false);
			let delivery;
			if (deliveryCost === "350") {
				delivery = "Доставка по России — 350₽";
			} else if (deliveryCost === "300") {
				delivery = "Курьером по Москве — 300₽";
			} else {
				delivery = "Самовывоз (пр-т Андропова, 18 корп. 3)";
			}
			const products = cart.map((product) => {
				const productInCart: Record<string, string | number | undefined> = {
					id: product.productId,
					totalPrice: product.price,
					totalCount: product.amount,
					sticketNumber: product.stickerNumber,
					color: product.color,
					size: product.size,
					model: product.model,
				};
				Object.keys(productInCart).forEach((key) => {
					if (productInCart[key] === undefined) {
						delete productInCart[key];
					}
				});
				return productInCart;
			});
			const order = {
				name: fioValue,
				email: emailValue,
				phone: phoneValue,
				address: addressValue,
				comment: commentValue,
				deliveryType: delivery,
				paymentType: "Банковская карта",
				products: products,
			};
			axios
				.post("http://qa-games.ru/astore/create-order", order)
				.then(() => {
					setIsOrderMade(true);
					dispatch(aStoreActions.clearCart());
					setTimeout(() => {
						setIsOrderMade(false);
						navigate("/");
					}, 3000);
				})
				.catch((e) => {
					setOrderError(true);
				});
		}
	};

	const linkStyle = { textDecoration: "none", color: "inherit" };

	if (isOrderMade) {
		return (
			<div className="cartpage">
				<Typography.Title tag="h1" weight="bold" font="system">
					Ваш заказ создан успешно
				</Typography.Title>
			</div>
		);
	}

	return (
		<Page>
			<Gap size="xl" />

			<div className="cartpage">
				{amountInCart ? (
					<>
						<Typography.Text view="primary-large" weight="bold">
							ФИО
						</Typography.Text>
						<Input
							placeholder="Фамилия Имя Отчество"
							type="text"
							block={true}
							value={fioValue}
							onChange={onFioChange}
							error={fioError}
						/>
						<Gap size="xl" />
						<Typography.Text view="primary-large" weight="bold">
							e-mail
						</Typography.Text>
						<Input
							placeholder="example@site.ru"
							type="email"
							block={true}
							value={emailValue}
							onChange={onEmailChange}
							error={emailError}
						/>
						<Gap size="xl" />
						<Typography.Text view="primary-large" weight="bold">
							Телефон
						</Typography.Text>
						<PhoneInput
							placeholder="+7 000 000 00 00"
							block={true}
							value={phoneValue}
							onChange={onPhoneChange}
							error={phoneError}
						/>
						<Gap size="xl" />
						<Typography.Text view="primary-large" weight="bold">
							Адрес (если вы выбрали самовывоз — оставьте поле пустым)
						</Typography.Text>
						<Input
							placeholder="Индекс, город, улица, дом, квартира"
							block={true}
							value={addressValue}
							onChange={onAddressChange}
						/>
						<Gap size="xl" />
						<Typography.Text view="primary-large" weight="bold">
							Доставка
						</Typography.Text>
						<RadioGroup onChange={onDeliveryChange} value={deliveryCost}>
							<Radio label="Доставка по России — 350₽" value="350" />
							<Radio label="Курьером по Москве — 300₽" value="300" />
							<Radio label="Самовывоз (пр-т Андропова, 18 корп. 3)" value="0" />
						</RadioGroup>
						<Gap size="xl" />
						<Checkbox
							onChange={handleChangeCkecked}
							checked={checked}
							label="Согласен с политикой конфиденциальности и обработки персональных данных"
							error={checkedError}
						/>
						<Gap size="xl" />
						<Typography.Text view="primary-large" weight="bold">
							Комментарий к заказу
						</Typography.Text>
						<Textarea
							autosize={true}
							resize="vertical"
							minRows={3}
							block={true}
							value={commentValue}
							onChange={onCommentChange}
						/>
						<Gap size="xl" />
						<Divider />
						<Gap size="xs" />
						<div>
							<Typography.Text view="primary-large">Стоимость товаров в коризне:</Typography.Text>
							<Gap direction="horizontal" size="xs" />
							<Amount value={cost} minority={0} currency="RUB" bold="none" />
						</div>
						<div>
							<Typography.Text view="primary-large">Стоимость доставки:</Typography.Text>
							<Gap direction="horizontal" size="xs" />
							<Amount value={parseInt(deliveryCost)} minority={0} currency="RUB" bold="none" />
						</div>
						<Gap size="xs" />
						<Divider />
						<Gap size="xs" />
						<div>
							<Typography.Text view="primary-large" weight="bold">
								Итоговая сумма:
							</Typography.Text>
							<Gap direction="horizontal" size="xs" />
							<Amount value={cost + parseInt(deliveryCost)} minority={0} currency="RUB" bold="full" />
						</div>
						<Gap size="xl" />
						<CustomButton backgroundColor="black" block={true} onClick={validate}>
							Дальше
						</CustomButton>
						{orderError && (
							<Typography.Text view="primary-large" weight="bold" color="accent">
								При составление заказа произошла ошибка, попробуйте позже.
							</Typography.Text>
						)}
					</>
				) : (
					<div className="cartpage-empty">
						<Typography.Title tag="h1" weight="bold" font="system">
							Ваша корзина пуста
						</Typography.Title>
						<Gap size="xl" />
						<img className="cartpage-empty-img" src={emptyCartImg} alt="пустая корзина" />
						<Gap size="xl" />
						<Link to="/" style={linkStyle}>
							<CustomButton backgroundColor="black">Вернуться на главную страницу</CustomButton>
						</Link>
					</div>
				)}
			</div>
		</Page>
	);
};

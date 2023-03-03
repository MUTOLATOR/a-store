import { Gap } from "@alfalab/core-components/gap";
import { Typography } from "@alfalab/core-components/typography";
import { YMaps, Map, ZoomControl, Placemark } from "@pbe/react-yandex-maps";
import { Page } from "components/page";
import "./styles.css";

export const ContactUspage = () => {
	const defaultMapState = {
		center: [55.694459, 37.661994],
		zoom: 15,
	};

	return (
		<Page>
			<div className="contacts">
				<Typography.Title tag="h1" view="xlarge" weight="bold">
					Контакты
				</Typography.Title>
				<Gap size="3xl" />
				<Typography.Text view="primary-large" weight="bold">
					{`+7 906 061 60 20
					info@alfabankstore.ru`}
				</Typography.Text>
				<Gap size="l" />
				<Typography.Text view="primary-large" weight="bold">
					г. Москва, пр-т Андропова, 18 корп. 3
				</Typography.Text>
				<Gap size="l" />
				<Typography.Text view="primary-large" weight="bold">
					{`пн-чт:
					10:00—19:00
					пт:
					10:00—17:30`}
				</Typography.Text>
				<Gap size="l" />
				<Typography.Text view="primary-large" weight="bold">
					Принимаем к оплате карты Visa, Mastercard, МИР.
				</Typography.Text>
				<Gap size="l" />
				<YMaps>
					<Map className="contacts-map" defaultState={defaultMapState}>
						<Placemark geometry={[55.694459, 37.661994]} />
						<ZoomControl />
					</Map>
				</YMaps>
				<Gap size="l" />
			</div>
		</Page>
	);
};

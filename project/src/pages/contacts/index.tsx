import { Gap } from '@alfalab/core-components/gap';
import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';
import { Page } from '../../components/page/page';
import styles from './index.module.css';

export const Contacts = () => {
  return (
    <Page>
      <Typography.TitleResponsive tag='h1' view='xlarge' color="primary" weight='bold'>Контакты</Typography.TitleResponsive>
      <Gap size='l' />
      <Typography.TitleResponsive tag='h1' view='xsmall' color="primary">+7 906 061 60 20</Typography.TitleResponsive>
      <Typography.TitleResponsive tag='h1' view='xsmall' color="primary">info@alfabankstore.ru</Typography.TitleResponsive>
      <Gap size='l' />
      <Typography.TitleResponsive tag='h1' view='xsmall' color="primary">г. Москва, пр-т Андропова, 18 корп. 3</Typography.TitleResponsive>
      <Gap size='l' />
      <Typography.TitleResponsive tag='h1' view='xsmall' color="primary">пн-чт: 10:00—19:00</Typography.TitleResponsive>
      <Typography.TitleResponsive tag='h1' view='xsmall' color="primary">пт: 10:00—17:30</Typography.TitleResponsive>
      <Gap size='l' />
      <Typography.TitleResponsive tag='h1' view='xsmall' color="primary">Принимаем к оплате карты Visa, Mastercard, МИР.</Typography.TitleResponsive>
      <Gap size='l' />
      <Typography.Text view='primary-medium' weight='bold'>
        <Link view='primary' href='/policy'>Политика конфиденциальности и обработки персональных данных</Link>
      </Typography.Text>
      <Gap size='l' />
      <iframe
        className={styles.iframe}
        title='card'
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1fa047070e9cc12b5f6fa44217adac53cd8abd7d272307e31a6c6f1f5ab80c92&amp;source=constructor"
        frameBorder="0"
      >
      </iframe>
    </Page>
  );
}

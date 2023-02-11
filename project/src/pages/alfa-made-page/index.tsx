import { Typography } from "@alfalab/core-components/typography";
import { Grid } from "@alfalab/core-components/grid";
import { Footer } from "../footer";
import { Header } from "../header";

import styles from './index.module.css';
import { Gap } from "@alfalab/core-components/gap";
import { useNavigate } from "react-router-dom";

type TCard = {
  "id": number,
  "preview": string,
  "title": string,
  "price": number,
  "availability": boolean,
}

const products = require('../../mocks/products.json').products;
const renderCard = (card: TCard, onClick: () => void) => {
  return (
    <Grid.Col key={card.id}>
      <div className={styles.card} onClick={onClick}>
        <img className={styles.pageImage} src={card.preview} alt={card.title} />
        <Typography.Title tag="div" view='small'>{card.title}</Typography.Title>
        <Typography.Title tag="div" view='xsmall' weight="bold">{card.price}&#8381;</Typography.Title>
      </div>
    </Grid.Col>
  );
}

export const AlfaMadePage = () => {
  const navigate = useNavigate();
  const onClick = () => navigate('/product');
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.pageWrapper}>
        <Gap size='xl' />
        <Typography.Title className={styles.pageTitle} tag='h1' color="primary" weight="bold" view="xlarge">Сделано в Альфе</Typography.Title>
        <Gap size='xl' />
        <Typography.Title tag='h6' view='small' color="primary">
          Хотим каждую из этих вещей! Себе, родным и друзьям
        </Typography.Title>
        <Gap size='xl' />
        <Grid.Row align='top' gutter={{ mobile: 0, tablet: 16, desktop: { m: 24 } }}>
          {products.map((element: TCard) => renderCard(element, onClick))}
        </Grid.Row>

      </div>
      <Footer isPageMain={false} />
    </div>
  );
}

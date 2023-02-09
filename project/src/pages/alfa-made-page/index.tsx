import { Typography } from "@alfalab/core-components/typography";
import { Grid } from "@alfalab/core-components/grid";
import { Footer } from "../footer";
import { Header } from "../header";

import styles from './index.module.css';
import { Link } from "@alfalab/core-components/link";

type TCard = {
  "id": number,
  "preview": string,
  "title": string,
  "price": number,
  "availability": boolean,
}

const products = require('../../mocks.json').products;
const renderCard = (card: TCard) => {
  return (
    <Grid.Col>
      <Link href='#' className={styles.link}>
        <img className={styles.pageImage} src={require('../../assets/Frame_46.jpeg')} alt={card.title} />
        <Typography.Title tag="div" view='small'>{card.title}</Typography.Title>
        <Typography.Title  tag="div" view='xsmall' weight="bold">{card.price}&#8381;</Typography.Title>
      </Link>
    </Grid.Col>
  );
}

export const AlfaMadePage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.pageWrapper}>
        <Typography.Title tag='h1' color="primary" weight="bold" view="xlarge">Сделано в Альфе</Typography.Title>
        <Typography.Title tag='h6' view='small' color="primary" weight="bold">
          Хотим каждую из этих вещей
        </Typography.Title>
        <Typography.Title tag='h1' view='small' color="primary" weight="bold">
          Себе, родным и друзьям
        </Typography.Title>
        
        
        <Grid.Row align='top' gutter={{ mobile: 0, tablet: 16, desktop: { m: 24 } }}>
          {products.map((element: TCard) => renderCard(element))}
        </Grid.Row>
        
      </div>
      <Footer />
    </div>
  );
}

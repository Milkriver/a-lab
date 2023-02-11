import { Gap } from '@alfalab/core-components/gap';
import { Grid } from '@alfalab/core-components/grid';
import { Typography } from '@alfalab/core-components/typography';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../footer';
import { Header } from '../header';
import styles from './index.module.css';


type TCard = {
  id: number,
  preview: string,
  title: string,
  price: number,
  availability: boolean,
  colors: string[],
  description: string,
  subtitle: string,
  images: string[],
  sizes: string[],
  stickerNumbers: number[],
}

type TCardList = {
  description: string,
  id: number,
  products: TCard[],
  title: string,
}

const products = require('../../mocks/groups.json').groups;
const renderCard = (card: TCard, onClick: () => void) => {
  return (
    <Grid.Col key={card.id}>
      <div className={styles.card} onClick={onClick}>
        <img className={styles.pageImage} src={card.preview} alt={card.title} />
        <Typography.Title tag="div" view='small'>{card.title}</Typography.Title>
        <Gap size='xs' />
        <Typography.Text tag="div" view='primary-large' color="tertiary">{card.subtitle}</Typography.Text>
        <Gap size='xs' />
        <Typography.Title tag="div" view='small' weight="bold">{card.price}&#8381;</Typography.Title>
      </div>
    </Grid.Col>
  );
}
const renderCardList = (cardList: TCardList, onClick: () => void) => {
  return (
    <div key={cardList.id}>
      <Gap size='xl' />
      <Typography.Title tag='h1' view='xlarge' color="accent" weight='bold'>{cardList.title}</Typography.Title>
      <Gap size='xl' />
      <Grid.Row align='top' gutter={{ mobile: 0, tablet: 16, desktop: { m: 24 } }}>
        {cardList.products.map((element: TCard) => renderCard(element, onClick))}
      </Grid.Row>
      <Gap size='xl' />
    </div>
  );
};

export const DesignPage = () => {
  const navigate = useNavigate();
  const onClick = () => navigate('/product');
  return (
    <div className={styles.designPage}>
      <Header />
      <div className={styles.pageWrapper}>
        <Gap size='xl' />
        <Typography.Title className={styles.pageTitle} tag='h1' color="primary" weight="bold" view="xlarge">Свой дизайн</Typography.Title>
        <Gap size='xl' />
        <Typography.Title tag='h6' view='small' color="primary">
          Выберите вещь, а затем — цвет, размер и стикер.
        </Typography.Title>
        <Typography.Title tag='h6' view='small' color="primary">
          Перенесём стикер на вещь как на фото
        </Typography.Title>
        <Gap size='xl' />
        <Grid.Row align='top' gutter={{ mobile: 0, tablet: 16, desktop: { m: 24 } }}>
          {products.map((element: TCardList) => renderCardList(element, onClick))}
        </Grid.Row>
        <Gap size='xl' />
        <Gap size='xl' />
        <Gap size='xl' />
        <Typography.Title tag='h6' view='small' color="tertiary">
          Посмотреть и потрогать все стикеры можно в A-Store на Технопарке.
        </Typography.Title>
        <Typography.Title tag='h6' view='small' color="tertiary">
          А ещё там можно добавить сразу несколько стикеров на одну вещь.
        </Typography.Title>
      </div>
      <Footer isPageMain={false} />
    </div>
  );
}

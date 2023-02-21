import { Gap } from '@alfalab/core-components/gap';
import { Grid } from '@alfalab/core-components/grid';
import { Typography } from '@alfalab/core-components/typography';
import { TCard } from '../../types';
import styles from './index.module.css';

type TProps = {
  card: TCard;
}

export const Card = ({ card }: TProps) => {
  return (
    <Grid.Col className={styles.cardWrapper} key={card.id} width={{ mobile: 12, tablet: 6, desktop: 4 }}>
      <a className={styles.card} href='/product'>
        <img className={styles.pageImage} src={card.preview} alt={card.title} />
        <Typography.Title tag="div" view='small'>{card.title}</Typography.Title>
        {(card.subtitle) && <Gap size='xs' />}
        <Typography.Title className={styles.text} tag="div" view='xsmall' font='styrene' color="tertiary">
          {(card.subtitle) && card.subtitle}
        </Typography.Title>
        <Gap size='l' />
        <Typography.Title tag="div" view='small' weight="bold">{card.price}&#8381;</Typography.Title>
        <Gap size='l' />
      </a>
    </Grid.Col>
  );
}

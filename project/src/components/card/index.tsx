import { Gap } from '@alfalab/core-components/gap';
import { Grid } from '@alfalab/core-components/grid';
import { Typography } from '@alfalab/core-components/typography';
import { TCard, TCardPreview } from '../../types';
import styles from './index.module.css';

type TProps = {
  card: TCard | TCardPreview;
}

export const Card = ({ card }: TProps) => {
  return (
    <Grid.Col className={styles.cardWrapper} key={card.id} width={{ mobile: 12, tablet: 6, desktop: 4 }}>
      <a className={styles.card} href={`/product/${card.id}`}>
        <div className={styles.pageImage} style={{backgroundImage: `url(${card.preview})`}}/>
        <Typography.TitleResponsive tag="div" view='small'>{card.title}</Typography.TitleResponsive>
        {(card as TCard).subtitle && <Gap size='xs' />}
        <Typography.TitleResponsive className={styles.text} tag="div" view='xsmall' font='styrene' color="tertiary">
          {(card as TCard).subtitle && (card as TCard).subtitle}
        </Typography.TitleResponsive>
        <Gap size='l' />
        <Typography.TitleResponsive tag="div" view='small' weight="bold">{card.price}&#8381;</Typography.TitleResponsive>
        <Gap size='l' />
      </a>
    </Grid.Col>
  );
}

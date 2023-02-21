import { Gap } from '@alfalab/core-components/gap';
import { Grid } from '@alfalab/core-components/grid';
import { Typography } from '@alfalab/core-components/typography';
import { Card } from '../../components/card';
import { Page } from '../../components/page/page';
import { TCard, TCardList } from '../../types';
import styles from './index.module.css';


const products = require('../../mocks/groups.json').groups;

export const Design = () => {
  return (
    <Page>
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
        <Grid.Row align='top' justify="left" gutter={{ mobile: 0, tablet: 0, desktop: 0 }}>
          {products.map((list: TCardList) => {
            return (
              <div key={list.id}>
                <Gap size='xl' />
                <Typography.Title tag='h1' view='xlarge' color="accent" weight='bold'>{list.title}</Typography.Title>
                <Gap size='xl' />
                <Grid.Row align='top' justify="left" gutter={{ mobile: 0, tablet: 0, desktop: 0 }}>
                  {list.products.map((element: TCard) => <Card card={element} />)}
                </Grid.Row>
                <Gap size='xl' />
              </div>
            )
          })
          }
        </Grid.Row>
        <Gap size='xl' />
        <Typography.Title tag='h6' view='small' color="tertiary">
          Посмотреть и потрогать все стикеры можно в A-Store на Технопарке.
        </Typography.Title>
        <Typography.Title tag='h6' view='small' color="tertiary">
          А ещё там можно добавить сразу несколько стикеров на одну вещь.
        </Typography.Title>
      </div>
    </Page>
  );
}

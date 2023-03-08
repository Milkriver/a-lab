import { Gap } from '@alfalab/core-components/gap';
import { Grid } from '@alfalab/core-components/grid';
import { Typography } from '@alfalab/core-components/typography';
import { Fragment, useEffect } from 'react';
import { Card } from '../../components/card';
import { Page } from '../../components/page';
import { useAppDispatch, useAppSelector } from '../../store';
import { detailProductsSelector, productsActions } from '../../store/products';
import { TCard, TCardGroup } from '../../types';

export const Design = () => {
  const dispatch = useAppDispatch();
  const detailProducts = useAppSelector(detailProductsSelector);

  useEffect(() => {
    dispatch(productsActions.detailRequest())
  }, [dispatch]);

  return (
    <Page>
      <Grid.Row align='top' justify="left">
        <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 12 }}>
          <Gap size='xl' />
          <Typography.TitleResponsive tag='h1' color="primary" weight="bold" view="xlarge">Свой дизайн</Typography.TitleResponsive>
          <Gap size='xl' />
          <Typography.TitleResponsive tag='h6' view='small' color="primary">
            Выберите вещь, а затем — цвет, размер и стикер.
          </Typography.TitleResponsive>
          <Typography.TitleResponsive tag='h6' view='small' color="primary">
            Перенесём стикер на вещь как на фото
          </Typography.TitleResponsive>
          <Gap size='xl' />
        </Grid.Col>
      </Grid.Row>
      {detailProducts.map((list: TCardGroup) =>
        <Fragment key={list.id}>
          <Grid.Row align='top' justify="left">
            <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 12 }}>
              <Gap size='xl' />
              <Typography.TitleResponsive tag='h1' view='large' color="accent" weight='bold'>{list.title}</Typography.TitleResponsive>
              <Gap size='xl' />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row align='top' justify="left">
            {list.products.map((element: TCard) => <Card card={element} key={element.id}/>)}
          </Grid.Row>
          <Gap size='xl' />
        </Fragment>
      )}
      <Grid.Row align='top' justify="left">
        <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 12 }}>
          <Gap size='xl' />
          <Typography.TitleResponsive tag='h6' view='small' color="tertiary">
            Посмотреть и потрогать все стикеры можно в A-Store на Технопарке.
          </Typography.TitleResponsive>
          <Typography.TitleResponsive tag='h6' view='small' color="tertiary">
            А ещё там можно добавить сразу несколько стикеров на одну вещь.
          </Typography.TitleResponsive>
        </Grid.Col>
      </Grid.Row>
    </Page>
  );
}

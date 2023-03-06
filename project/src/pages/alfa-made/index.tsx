import { Typography } from "@alfalab/core-components/typography";
import { Grid } from "@alfalab/core-components/grid";
import styles from './index.module.css';
import { Gap } from "@alfalab/core-components/gap";
import { TCard } from "../../types";
import { Page } from "../../components/page/page";
import { Card } from "../../components/card";
import { useEffect } from "react";
import { previewProductsSelector, productsActions } from "../../store/products";
import { useAppDispatch, useAppSelector } from "../../store";

export const AlfaMade = () => {
  const dispatch = useAppDispatch();
  const alfaMadeProducts = useAppSelector(previewProductsSelector);

  useEffect(() => {
    dispatch(productsActions.previewRequest())
  }, [dispatch]);

  return (
    <Page>
      <Grid.Row align='top' justify="left">
        <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 12 }}>
          <Gap size='xl' />
          <Typography.TitleResponsive className={styles.pageTitle} tag='h1' color="primary" weight="bold" view="xlarge">Сделано в Альфе</Typography.TitleResponsive>
          <Gap size='xl' />
          <Typography.TitleResponsive tag='h6' view='small' color="primary">
            Хотим каждую из этих вещей! Себе, родным и друзьям
          </Typography.TitleResponsive>
          <Gap size='xl' />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row align='top' justify="left">
        {alfaMadeProducts.map((card: TCard) => <Card card={card} key={card.id}/>)}
      </Grid.Row>
    </Page>
  );
}

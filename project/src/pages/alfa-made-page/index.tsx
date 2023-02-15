import { Typography } from "@alfalab/core-components/typography";
import { Grid } from "@alfalab/core-components/grid";
import { Footer } from "../footer";
import { Header } from "../header";

import styles from './index.module.css';
import { Gap } from "@alfalab/core-components/gap";
import { useNavigate } from "react-router-dom";
import { TCardPreview } from "../../types";

const products = require('../../mocks/products.json').products;

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
          {products.map((element: TCardPreview) => {
            return (
              <Grid.Col key={element.id}>
                <div className={styles.card} onClick={onClick}>
                  <img className={styles.pageImage} src={element.preview} alt={element.title} />
                  <Typography.Title tag="div" view='small'>{element.title}</Typography.Title>
                  <Gap size='xs' />
                  <Typography.Title tag="div" view='xsmall' weight="bold">{element.price}&#8381;</Typography.Title>
                </div>
              </Grid.Col>
            )
          })}
        </Grid.Row>
      </div>
      <Footer />
    </div>
  );
}

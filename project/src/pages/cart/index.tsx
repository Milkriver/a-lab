import { Button } from '@alfalab/core-components/button';
import { Divider } from '@alfalab/core-components/divider';
import { Gap } from '@alfalab/core-components/gap';
import { Grid } from '@alfalab/core-components/grid';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../../components/page/page';
import { useAppDispatch, useAppSelector } from '../../store';
import { orderActions, positionsSelector, sumSelector } from '../../store/order';
import { TDeliveryInfo } from '../../types';
import styles from './index.module.css';

const deliveryInfoMock: TDeliveryInfo = {
  name: "John Doe",
  email: "JohnDoe@JohnDoe.com",
  phone: "89995599111",
  address: "Москва, Кремль",
  deliveryType: "Доставка по России — 350₽",
  paymentType: "Банковская карта",
  comment: "hello",
}

export const Cart = () => {
  const positions = useAppSelector(positionsSelector);
  const sum = useAppSelector(sumSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(()=> {
    if(positions.length === 0)
    navigate('/')
  }, [navigate, positions.length])

  const nextStepHandler = () => {
    dispatch(orderActions.saveDeliveryInfo(deliveryInfoMock))
  }

  return (
    <Page>
      ФИО: Здесь будет форма<br />
      Адрес: здесь будет форма<br />
      Сумма заказа: {sum}<br />
      <br />
      Состав заказа:<br />
      {positions.map(position => (
        <Grid.Row align='top' justify="center" key={position.id}>
          <Grid.Col width={{ mobile: 2, tablet: 2, desktop: 2 }}>
            <div className={styles.image} style={{ backgroundImage: `url(${position.image})` }}></div>
          </Grid.Col>
          <Grid.Col width={{ mobile: 4, tablet: 4, desktop: 4 }}>
            <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary" weight='bold'>
              {position.name}
            </Typography.TitleResponsive>
            <Gap size='xs' />
            {position.color &&
              <Typography.TitleResponsive className={styles.text} tag='h6' view='small' color="primary" >
                цвет: {position.color}
              </Typography.TitleResponsive>}
            {position.model &&
              <Typography.TitleResponsive className={styles.text} tag='h6' view='small' color="primary">
                размер: {position.model}
              </Typography.TitleResponsive>}
            {position.sticketNumber &&
              <Typography.TitleResponsive className={styles.text} tag='h6' view='small' color="primary">
                номер стикера: {position.sticketNumber}
              </Typography.TitleResponsive>}
          </Grid.Col>
          <Grid.Col width={{ mobile: 2, tablet: 2, desktop: 2 }}>
            <Grid.Row align='top' justify="center">
              <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary">
                {position.totalCount}
              </Typography.TitleResponsive>
            </Grid.Row>
          </Grid.Col>
          <Grid.Col width={{ mobile: 2, tablet: 2, desktop: 2 }}>
            <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary">
              {position.totalPrice}&#8381;
            </Typography.TitleResponsive>
          </Grid.Col>
        </Grid.Row>
      ))}
      <Gap size={'s'} />
      <Divider />
      <Gap size={'s'} />
      <div className={styles.btnContainer}>
        <Button className={styles.button} view='primary' colors="inverted" block disabled={sum === 0} onClick={nextStepHandler}>Дальше</Button>
      </div>
    </Page>
  );
}

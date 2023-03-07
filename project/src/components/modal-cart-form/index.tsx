import { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@alfalab/core-components/button';
import { Gap } from '@alfalab/core-components/gap';
import { Textarea } from '@alfalab/core-components/textarea';
import { Grid } from '@alfalab/core-components/grid';
import { RadioGroup } from '@alfalab/core-components/radio-group';
import { Radio } from '@alfalab/core-components/radio';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Typography } from '@alfalab/core-components/typography';
import { PhoneInput } from '@alfalab/core-components/phone-input';
import { Input } from '@alfalab/core-components/input';
import { ModalResponsive } from '@alfalab/core-components/modal/responsive';
import { CartPositions } from '../cart-positions';
import { useAppDispatch, useAppSelector } from '../../store';
import { orderActions, positionsSelector, sumSelector } from '../../store/order';
import { notificationsActions } from '../../store/notifications';
import { orderSchema } from '../../validation/orderSchema';
import { TDeliveryInfo } from '../../types';
import styles from './index.module.css';

type TProps = {
  open: boolean,
  onClose: () => void,
}

export const Cart = ({ open, onClose }: TProps) => {
  const positions = useAppSelector(positionsSelector);
  const sum = useAppSelector(sumSelector);
  const dispatch = useAppDispatch();
  const { handleSubmit, control, formState: { errors, isValid } } = useForm<TDeliveryInfo>({
    resolver: yupResolver(orderSchema),
  });

  useEffect(() => {
    if (open && positions.length === 0)
      onClose()
  }, [positions.length, onClose, open])

  const onSubmit: SubmitHandler<TDeliveryInfo> = (deliveryInfo) => {
    if (!isValid) {
      dispatch(notificationsActions.addNotification({
        title: 'Некорректно заполнены данные формы заказа',
        badge: 'negative'
      }))
      return
    }
    dispatch(orderActions.saveDeliveryInfo(deliveryInfo))
  }

  return (
    <ModalResponsive className={styles.modal} open={open} onClose={onClose} fullscreen>
      <ModalResponsive.Header hasCloser>
        <Typography.TitleResponsive className={styles.pageTitle} tag='h1' view='medium' weight='bold'>Ваш заказ</Typography.TitleResponsive>
      </ModalResponsive.Header>
      <ModalResponsive.Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid.Row>
            <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 6 }}>
              <Controller
                name="name"
                control={control}
                render={({ field }) =>
                  <Input
                    {...field}
                    label='ФИО'
                    block={true}
                    placeholder='Фамилия Имя Отчество'
                    error={errors.name?.message}
                  />}
              />
              <Gap size={'xs'} />
              <Controller
                name="email"
                control={control}
                render={({ field }) =>
                  <Input
                    {...field}
                    label='email'
                    block={true}
                    placeholder='example@site.ru'
                    error={errors.email?.message}
                  />}
              />
              <Gap size={'xs'} />
              <Controller
                name="phone"
                control={control}
                render={({ field }) =>
                  <PhoneInput
                    {...field}
                    label='Телефон'
                    block={true}
                    placeholder='+7 000 000-00-00'
                    error={errors.phone?.message}
                  />}
              />
              <Gap size={'s'} />
              <Controller
                name="address"
                control={control}
                render={({ field }) =>
                  <Input
                    {...field}
                    label='Адрес'
                    block={true}
                    placeholder='Индекс, город, улица, дом, квартира'
                    error={errors.address?.message}
                  />}
              />
              <Gap size={'xs'} />
              <Controller
                name="deliveryType"
                control={control}
                defaultValue={undefined}
                render={({
                  field: { onChange, value },
                }) =>
                  <RadioGroup
                    onChange={onChange}
                    value={value}
                    label='Доставка'
                    error={errors.deliveryType?.message}
                  >
                    <Radio block={true} label='Доставка по России — 350₽' value='Доставка по России — 350₽' size='s' />
                    <Radio block={true} label='Курьером по Москве — 300₽' value='Курьером по Москве — 300₽' size='s' />
                    <Radio block={true} label='Самовывоз (пр-т Андропова, 18 корп. 3)' value='Самовывоз (пр-т Андропова, 18 корп. 3)' size='s' />
                  </RadioGroup>}
              />
              <Gap size={'xs'} />
              <Input label='Промокод' block={true} />
              <Gap size={'xs'} />
              <Controller
                name="agreement"
                control={control}
                defaultValue={false}
                render={({
                  field: { onChange, value },
                }) =>
                  <Checkbox
                    block={true}
                    size='m'
                    onChange={onChange}
                    checked={value}
                    label='Согласен с условиями'
                    error={errors.agreement?.message}
                  />}
              />
              <Gap size={'xs'} />
              <Controller
                name="comment"
                control={control}
                render={({ field }) =>
                  <Textarea
                    {...field}
                    label='Комментарий к заказу'
                    autosize={false}
                    resize='vertical'
                    minRows={1}
                    block={true}
                  />}
              />
              <Gap size={'xs'} />
              <Controller
                name="paymentType"
                control={control}
                defaultValue={undefined}
                render={({
                  field: { onChange, value },
                }) =>
                  <RadioGroup
                    onChange={onChange}
                    value={value}
                    label='Способ оплаты'
                    error={errors.paymentType?.message}
                  >
                    <Radio block={true} label='Банковская карта' value='Банковская карта' size='m' />
                    <Radio block={true} label='Промокод' value='Промокод' size='m' />
                  </RadioGroup>}
              />
              <Gap size={'xs'} />
            </Grid.Col>
            <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 6 }}>
              <CartPositions />
              <Gap size={'m'} />
              <Typography.TitleResponsive className={styles.sumtitle} tag='h6' view='small' color="primary" weight='bold'>
                Сумма заказа: {sum}&#8381;
              </Typography.TitleResponsive>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 6 }}>
              <Gap size={'xs'} />
              <Button type="submit" className={styles.button} view='primary' colors="inverted" block disabled={sum === 0}>Дальше</Button>
            </Grid.Col>
          </Grid.Row>
        </form>
      </ModalResponsive.Content>
    </ModalResponsive >
  );
}

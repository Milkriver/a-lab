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
import { MinusMIcon } from '@alfalab/icons/glyph/dist/MinusMIcon';
import { PlusMIcon } from '@alfalab/icons/glyph/dist/PlusMIcon';
import { CrossMIcon } from '@alfalab/icons/glyph/dist/CrossMIcon';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { Fragment, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ModalResponsive } from '@alfalab/core-components/modal/responsive';
import { useAppDispatch, useAppSelector } from '../../store';
import { orderActions, positionsSelector, sumSelector } from '../../store/order';
import { TDeliveryInfo, TOrderPosition } from '../../types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { notificationsActions } from '../../store/notifications';
import styles from './index.module.css';

type IProps = {
  open: boolean,
  onClose: () => void,
}

const schema = yup.object({
  name: yup.string().required('Не указано имя'),
  email: yup.string().email('Некорректный формат электронной почты').required('Не указана электронная почта'),
  phone: yup.string().trim().matches(/^\+7 \d{3} \d{3}-\d{2}-\d{2}$/, 'Некорректный номер телефона').required('Не указан телефон'),
  address: yup.string().default('').required('Не указан адрес'),
  deliveryType: yup.string().required('Не выбран тип доставки'),
  paymentType: yup.string().required('Не указан способ оплаты'),
  comment: yup.string(),
  agreement: yup.boolean().oneOf([true], 'Необходимо согласие')
}).required();

export const Cart = ({ open, onClose }: IProps) => {
  const positions = useAppSelector(positionsSelector);
  const sum = useAppSelector(sumSelector);
  const dispatch = useAppDispatch();
  const plusItem = (position: TOrderPosition) => dispatch(orderActions.plusPosition(position))
  const minusItem = (position: TOrderPosition) => dispatch(orderActions.minusPosition(position))
  const dropItem = (position: TOrderPosition) => dispatch(orderActions.dropPosition(position))
  const { handleSubmit, control, formState: { errors, isValid } } = useForm<TDeliveryInfo>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (positions.length === 0)
      onClose()
  }, [positions.length, onClose])

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
      <div className={styles.modalWrapper}>
        <ModalResponsive.Header hasCloser />
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
              <Gap size={'s'} />
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
              <Gap size={'s'} />
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
              <Gap size={'s'} />
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
                    <Radio block={true} label='Доставка по России — 350₽' value='Доставка по России — 350₽' size='m' />
                    <Radio block={true} label='Курьером по Москве — 300₽' value='Курьером по Москве — 300₽' size='m' />
                    <Radio block={true} label='Самовывоз (пр-т Андропова, 18 корп. 3)' value='Самовывоз (пр-т Андропова, 18 корп. 3)' size='m' />
                  </RadioGroup>}
              />
              <Gap size={'s'} />
              <Input label='Промокод' block={true} />
              <Gap size={'s'} />
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
              <Gap size={'s'} />
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
              <Gap size={'s'} />
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
              <Gap size={'s'} />
            </Grid.Col>
            <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 6 }}>
              <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary">
                Заказ
              </Typography.TitleResponsive>
              <Gap size={'s'} />
              {positions.map(position => (
                <Fragment key={position.id}>
                  <Grid.Row align='middle' justify="center" >
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
                      <Grid.Row align='middle' justify='center' >
                        <Circle size={24}><MinusMIcon onClick={() => minusItem(position)} /></Circle>
                        <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary">
                          &nbsp;{position.totalCount}&nbsp;
                        </Typography.TitleResponsive>
                        <Circle size={24}><PlusMIcon onClick={() => plusItem(position)} /></Circle>
                      </Grid.Row>
                    </Grid.Col>
                    <Grid.Col width={{ mobile: 2, tablet: 2, desktop: 2 }}>
                      <Grid.Row align='middle' justify='center' >
                        <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary">
                          {position.totalPrice}&#8381;
                        </Typography.TitleResponsive>
                      </Grid.Row>
                    </Grid.Col>
                    <Grid.Col width={{ mobile: 1, tablet: 1, desktop: 1 }}><Circle size={24}><CrossMIcon onClick={() => dropItem(position)} /></Circle></Grid.Col>
                  </Grid.Row>
                  <Gap size={'s'} />
                </Fragment>
              ))}
              <Gap size={'l'} />
              <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary" weight='bold'>
                Сумма заказа: {sum}&#8381;
              </Typography.TitleResponsive>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 6 }}>
              <Gap size={'s'} />
              <Button type="submit" className={styles.button} view='primary' colors="inverted" block disabled={sum === 0}>Дальше</Button>
              <Gap size={'s'} />
            </Grid.Col>
          </Grid.Row>
        </form>
      </div>
    </ModalResponsive >
  );
}

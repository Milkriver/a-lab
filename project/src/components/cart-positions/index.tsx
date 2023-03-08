import { Fragment } from 'react';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { Grid } from "@alfalab/core-components/grid";
import { MinusMIcon } from '@alfalab/icons/glyph/dist/MinusMIcon';
import { PlusMIcon } from '@alfalab/icons/glyph/dist/PlusMIcon';
import { CrossMIcon } from '@alfalab/icons/glyph/dist/CrossMIcon';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { useAppDispatch, useAppSelector } from '../../store';
import { orderActions, positionsSelector } from '../../store/order';
import { TOrderItem, TOrderPosition } from '../../types';
import styles from './index.module.css';

export const CartPositions = () => {
    const positions = useAppSelector(positionsSelector);
    const dispatch = useAppDispatch();
    const plusItem = (item: TOrderItem) => dispatch(orderActions.addItem(item))
    const minusItem = (position: TOrderPosition) => dispatch(orderActions.minusItem(position))
    const dropItem = (position: TOrderPosition) => dispatch(orderActions.dropItem(position))

    return (<>
        {positions.map(position => (
            <Fragment key={position.id}>
                <Grid.Row className={styles.cartRow} align='top' justify="center">
                    <Grid.Col width={{ mobile: 3, tablet: 2, desktop: 3 }}>
                        <div className={styles.image} style={{ backgroundImage: `url(${position.item.preview})` }}></div>
                    </Grid.Col>
                    <Grid.Col width={{ mobile: 8, tablet: 8, desktop: 8 }} >
                        <Grid.Row className={styles.cartRow} align='top' justify="center">
                            <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 6 }}>
                                <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary" weight='bold'>
                                    {position.item.title}
                                </Typography.TitleResponsive>
                                <Gap size='xs' />
                                {position.item.color &&
                                    <Typography.TitleResponsive className={styles.text} tag='h6' view='small' color="primary" >
                                        цвет: {position.item.color}
                                    </Typography.TitleResponsive>}
                                {position.item.model &&
                                    <Typography.TitleResponsive className={styles.text} tag='h6' view='small' color="primary">
                                        размер: {position.item.model}
                                    </Typography.TitleResponsive>}
                                {position.item.sticketNumber &&
                                    <Typography.TitleResponsive className={styles.text} tag='h6' view='small' color="primary">
                                        номер стикера: {position.item.sticketNumber}
                                    </Typography.TitleResponsive>}
                                    <Gap size='s' />
                            </Grid.Col>
                            <Grid.Col width={{ mobile: 6, tablet: 6, desktop: 3 }}>
                                <Grid.Row align='middle' justify='left' >
                                    <Circle size={20}><MinusMIcon onClick={() => minusItem(position)} /></Circle>
                                    <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary">
                                        &nbsp;{position.totalCount}&nbsp;
                                    </Typography.TitleResponsive>
                                    <Circle size={20}><PlusMIcon onClick={() => plusItem(position.item)} /></Circle>
                                </Grid.Row>
                            </Grid.Col>
                            <Grid.Col width={{ mobile: 6, tablet: 6, desktop: 3 }}>
                                <Grid.Row align='middle' justify='right' >
                                    <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary">
                                        {position.totalPrice}&#8381;
                                    </Typography.TitleResponsive>
                                </Grid.Row>
                            </Grid.Col>
                        </Grid.Row>
                    </Grid.Col>
                    <Grid.Col width={{ mobile: 1, tablet: 1, desktop: 1 }} align='top'><Circle size={20}><CrossMIcon onClick={() => dropItem(position)} /></Circle></Grid.Col>
                </Grid.Row>
                <Gap size='l' />
            </Fragment>
        ))}
    </>);
};

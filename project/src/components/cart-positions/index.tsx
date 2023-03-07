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
import { TOrderPosition } from '../../types';
import styles from './index.module.css';

export const CartPositions = () => {
    const positions = useAppSelector(positionsSelector);
    const dispatch = useAppDispatch();
    const plusItem = (position: TOrderPosition) => dispatch(orderActions.plusPosition(position))
    const minusItem = (position: TOrderPosition) => dispatch(orderActions.minusPosition(position))
    const dropItem = (position: TOrderPosition) => dispatch(orderActions.dropPosition(position))

    return (<>
        {positions.map(position => (
            <Fragment key={position.id}>
                <Grid.Row align='middle' justify="center" key={position.id}>
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
                <Gap size='s' />
            </Fragment>
        ))}
    </>);
};

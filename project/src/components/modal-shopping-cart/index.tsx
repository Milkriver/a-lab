import { Gap } from '@alfalab/core-components/gap';
import { SidePanelResponsive } from '@alfalab/core-components/side-panel/Component.responsive';
import { Typography } from '@alfalab/core-components/typography';
import { Divider } from '@alfalab/core-components/divider';
import { Grid } from "@alfalab/core-components/grid";
import { Button } from '@alfalab/core-components/button';
import styles from './index.module.css';


import { MinusMIcon } from '@alfalab/icons/glyph/dist/MinusMIcon';
import { PlusMIcon } from '@alfalab/icons/glyph/dist/PlusMIcon';
import { CrossMIcon } from '@alfalab/icons/glyph/dist/CrossMIcon';
import { Circle } from '@alfalab/core-components/icon-view/circle';

type IProps = {
    open: boolean,
    onClose: () => void,
}

const mockOrder = [{
    id: 1,
    image: 'http://qa-games.ru/astore/public/images/15932051.jpeg',
    totalPrice: 2224,
    totalCount: 2,
    color: 'red',
    model: 'm',
    sticketNumber: 1,
    name: "Очень красивый и прекрасный худи-перехуди"
},
{
    id: 2,
    image: 'http://qa-games.ru/astore/public/images/15932051.jpeg',
    totalPrice: 2224,
    totalCount: 2,
    color: 'red',
    model: 'm',
    sticketNumber: 1,
    name: "Худи2"
}];

export const ModalShoppingCart = ({ open, onClose }: IProps) => {
    return (
        <SidePanelResponsive
            // className={styles.menuWrapper} 
            open={open} onClose={onClose}>
            <SidePanelResponsive.Header hasCloser={true}>
                <Typography.TitleResponsive tag='h1' view='small' weight='bold'>Ваш заказ</Typography.TitleResponsive>
                <Gap size='m' />

            </SidePanelResponsive.Header>
            <SidePanelResponsive.Content>
                <Divider />
                <Gap size='xl' />
                <Grid.Row align='top' justify="center">
                    <Grid.Col width={{ mobile: 2, tablet: 2, desktop: 2 }}>
                        <div className={styles.image} style={{ backgroundImage: `url(${mockOrder[0].image})` }}></div>
                    </Grid.Col>
                    <Grid.Col width={{ mobile: 4, tablet: 4, desktop: 4 }}>
                        <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary" weight='bold'>
                            {mockOrder[0].name}
                        </Typography.TitleResponsive>
                        <Gap size='xs' />
                        <Typography.TitleResponsive className={styles.text} tag='h6' view='small' color="primary" >
                            цвет: {mockOrder[0].color}
                        </Typography.TitleResponsive>
                        <Typography.TitleResponsive className={styles.text} tag='h6' view='small' color="primary">
                            размер: {mockOrder[0].model}
                        </Typography.TitleResponsive>
                        <Typography.TitleResponsive className={styles.text} tag='h6' view='small' color="primary">
                            номер стикера: {mockOrder[0].sticketNumber}
                        </Typography.TitleResponsive>
                    </Grid.Col>
                    <Grid.Col width={{ mobile: 2, tablet: 2, desktop: 2 }}>
                        <Grid.Row align='top' justify="center">
                            <Circle size={24}><MinusMIcon /></Circle>
                            <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary">
                                {mockOrder[0].totalCount}
                            </Typography.TitleResponsive>
                            <Circle size={24}><PlusMIcon /></Circle>
                        </Grid.Row>
                    </Grid.Col>
                    <Grid.Col width={{ mobile: 2, tablet: 2, desktop: 2 }}>
                        <Typography.TitleResponsive className={styles.title} tag='h6' view='small' color="primary">
                            {mockOrder[0].totalPrice}&#8381;
                        </Typography.TitleResponsive>
                    </Grid.Col>
                    <Grid.Col width={{ mobile: 1, tablet: 1, desktop: 1 }}><Circle size={24}><CrossMIcon /></Circle></Grid.Col>
                </Grid.Row>
                <Gap size='xl' />
                <Divider />
                <Gap size='m' />
                <Typography.TitleResponsive tag='h1' view='xsmall' weight='bold'>Сумма: 22994 &#8381;</Typography.TitleResponsive>
                <Gap size='m' />
            </SidePanelResponsive.Content>
            <SidePanelResponsive.Footer>
                <Button className={styles.button} view='primary' colors="inverted" block>Дальше</Button>
            </SidePanelResponsive.Footer>
        </SidePanelResponsive>
    );
};


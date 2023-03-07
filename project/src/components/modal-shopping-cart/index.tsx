import { Gap } from '@alfalab/core-components/gap';
import { SidePanelResponsive } from '@alfalab/core-components/side-panel/Component.responsive';
import { Typography } from '@alfalab/core-components/typography';
import { Divider } from '@alfalab/core-components/divider';
import { Button } from '@alfalab/core-components/button';
import { CartPositions } from '../cart-positions';
import { useAppSelector } from '../../store';
import { sumSelector } from '../../store/order';
import styles from './index.module.css';
import { useEffect } from 'react';

type TProps = {
    open: boolean,
    onClose: () => void,
    onNextCartModalOpen: () => void,
}

export const ModalShoppingCart = ({ open, onClose, onNextCartModalOpen }: TProps) => {
    const sum = useAppSelector(sumSelector);

    useEffect(() => {
        if (open && sum === 0) {
            onClose();
        }
    }, [open, sum, onClose])

    const nextStepHandler = () => {
        onClose();
        onNextCartModalOpen();
    };

    return (
        <SidePanelResponsive open={open} onClose={onClose}>
            <SidePanelResponsive.Header hasCloser={true}>
                <Typography.TitleResponsive tag='h1' view='small' weight='bold'>Ваш заказ</Typography.TitleResponsive>
                <Gap size='m' />
            </SidePanelResponsive.Header>
            <SidePanelResponsive.Content className={styles.contentWrapper}>
                <Divider />
                <Gap size='xl' />
                <CartPositions />
                <Gap size='xl' />
                <Divider />
                <Gap size='m' />
                <Typography.TitleResponsive tag='h1' view='xsmall' weight='bold'>Сумма: {sum} &#8381;</Typography.TitleResponsive>
                <Gap size='m' />
            </SidePanelResponsive.Content>
            <SidePanelResponsive.Footer>
                <Button className={styles.button} view='primary' colors="inverted" block disabled={sum === 0} onClick={nextStepHandler}>Дальше</Button>
            </SidePanelResponsive.Footer>
        </SidePanelResponsive>
    );
};

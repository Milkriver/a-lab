import { Gap } from '@alfalab/core-components/gap';
import { SidePanelResponsive } from '@alfalab/core-components/side-panel/Component.responsive';
import { Typography } from '@alfalab/core-components/typography';
import styles from './index.module.css';

type IProps = {
    open: boolean,
    onClose: () => void,
}

export const Menu = ({ open, onClose }: IProps) => {
    return (
        <SidePanelResponsive className={styles.menuWrapper} open={open} onClose={onClose}>
            <SidePanelResponsive.Header hasCloser={true} />
            <SidePanelResponsive.Content>
                <div className={styles.menu}>
                    <Gap size='xl' />
                    <a className={styles.link} href='/made'>
                        <Typography.Title tag='div' view='medium'>
                            Сделано в Альфе
                        </Typography.Title>
                    </a>
                    <Gap size='xl' />
                    <a className={styles.link} href='/design'>
                        <Typography.Title tag='div' view='medium'>
                            Свой дизайн
                        </Typography.Title>
                    </a>
                    <Gap size='xl' />
                    <a className={styles.link} href='/contacts'>
                        <Typography.Title tag='div' view='medium'>
                            Контакты
                        </Typography.Title>
                    </a>
                    <Gap size='8xl' />
                </div>
            </SidePanelResponsive.Content>
            <SidePanelResponsive.Footer>
                <a className={styles.link} href='/policy'>
                    <Typography.Title className={styles.text} tag="div" view='xsmall' font='styrene' color="tertiary">
                        Политика в отношении обработки персональных данных
                    </Typography.Title>
                </a>
            </SidePanelResponsive.Footer>
        </SidePanelResponsive>
    );
};


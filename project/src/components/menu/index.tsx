import { Gap } from '@alfalab/core-components/gap';
import { SidePanelResponsive } from '@alfalab/core-components/side-panel/Component.responsive';
import { Typography } from '@alfalab/core-components/typography';
import styles from './index.module.css';

type TProps = {
    open: boolean,
    onClose: () => void,
}

export const Menu = ({ open, onClose }: TProps) => {
    return (
        <SidePanelResponsive className={styles.menuWrapper} open={open} onClose={onClose}>
            <SidePanelResponsive.Header hasCloser={true} />
            <SidePanelResponsive.Content>
                <div className={styles.menu}>
                    <Gap size='xl' />
                    <a className={styles.link} href='/made'>
                        <Typography.TitleResponsive tag='div' view='medium'>
                            Сделано в Альфе
                        </Typography.TitleResponsive>
                    </a>
                    <Gap size='xl' />
                    <a className={styles.link} href='/design'>
                        <Typography.TitleResponsive tag='div' view='medium'>
                            Свой дизайн
                        </Typography.TitleResponsive>
                    </a>
                    <Gap size='xl' />
                    <a className={styles.link} href='/contacts'>
                        <Typography.TitleResponsive tag='div' view='medium'>
                            Контакты
                        </Typography.TitleResponsive>
                    </a>
                    <Gap size='8xl' />
                </div>
            </SidePanelResponsive.Content>
            <SidePanelResponsive.Footer>
                <a className={styles.link} href='/policy'>
                    <Typography.TitleResponsive className={styles.text} tag="div" view='xsmall' font='styrene' color="tertiary">
                        Политика в отношении обработки персональных данных
                    </Typography.TitleResponsive>
                </a>
            </SidePanelResponsive.Footer>
        </SidePanelResponsive>
    );
};


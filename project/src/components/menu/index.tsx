import { Link } from '@alfalab/core-components/link';
import { SidePanelResponsive  } from '@alfalab/core-components/side-panel/Component.responsive';
import { Typography } from '@alfalab/core-components/typography';
import styles from './index.module.css';

type IProps = {
    open: boolean,
    onClose: () => void,
}

export const Menu = ({open, onClose}: IProps) => {
    return (
        <SidePanelResponsive  open={open} onClose={onClose}>
            <SidePanelResponsive.Header hasCloser={true} />
            <div className={styles.menu}>
                <Typography.Text view='primary-medium'>
                    <Link view='primary' href='/made'>Сделано в Альфе</Link>
                </Typography.Text>
                <Typography.Text view='primary-medium'>
                    <Link view='primary' href='/design'>Свой дизайн</Link>
                </Typography.Text>
                <Typography.Text view='primary-medium'>
                    <Link view='primary' href='/contacts'> Контакты </Link>
                </Typography.Text>
                <Typography.Text view='primary-medium'>
                    <Link view='primary' href='/policy'>Политика конфиденциальности и обработки персональных данных </Link>
                </Typography.Text>
            </div>
        </SidePanelResponsive>
    );
};


import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';
import { CrossHeavyMIcon } from '@alfalab/icons/glyph/dist/CrossHeavyMIcon';
import styles from './index.module.css';

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuCloseIcon}><CrossHeavyMIcon /></div>
            <Typography.Text view='primary-medium'>
                <Link
                    view='primary'
                    rel='noopener'
                    href='/made'
                >
                    Сделано в Альфе
                </Link>
            </Typography.Text>
            <Typography.Text view='primary-medium'>
                <Link
                    view='primary'
                    rel='noopener'
                    href='/design'
                >
                    Свой дизайн
                </Link>
            </Typography.Text>
            <Typography.Text view='primary-medium'>
                <Link
                    view='primary'
                    rel='noopener'
                    href='/contacts'
                >
                    Контакты
                </Link>
            </Typography.Text>
            <Typography.Text view='primary-medium'>
                <Link
                    view='primary'
                    rel='noopener'
                    href='/policy'
                >
                    Политика конфиденциальности
                    и обработки персональных данных
                </Link>
            </Typography.Text>
        </div>
    );
};

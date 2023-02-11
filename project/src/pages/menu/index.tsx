import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';
import { CrossHeavyMIcon } from '@alfalab/icons/glyph/dist/CrossHeavyMIcon';
import styles from './index.module.css';

type TProps = {
    onClose: () => void
}


export const Menu = ({ onClose }: TProps) => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuCloseIcon} onClick={onClose}><CrossHeavyMIcon /></div>
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
    );
};

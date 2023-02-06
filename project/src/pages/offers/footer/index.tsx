import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';
import styles from './index.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}><Typography.Text view='primary-small' color="tertiary" >&copy;ООО "Альфа Фьюче Пипл", 2022</Typography.Text></div>
      <div className={styles.policy}> <Typography.Text view='primary-small' color="tertiary" >
        <Link href="/policy">Политика в отношении обработки персональных данных</Link> </Typography.Text></div>
    </div>
  );
}


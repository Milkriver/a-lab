import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';
import styles from './index.module.css';

type TProps = {
  isPageMain: boolean;
}

export const Footer = ({ isPageMain }: TProps) => {
  return (
    <div className={isPageMain ? styles.mainFooter : styles.footer}>
      <div className={styles.copyright}><Typography.Text view='primary-medium' color="tertiary" >&copy;ООО "Альфа Фьюче Пипл", 2022</Typography.Text></div>
      {isPageMain && <div className={styles.policy}>
        <Typography.Text view='primary-medium' color="tertiary" >
          <Link href="/policy">Политика в отношении обработки персональных данных</Link>
        </Typography.Text>
      </div>
      }
    </div>
  );
}


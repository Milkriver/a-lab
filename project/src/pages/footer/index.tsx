import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';
import styles from './index.module.css';

type TProps = {
  isPageMain?: boolean;
}

export const Footer = ({ isPageMain = false }: TProps) => {
  return (
    <div className={isPageMain ? styles.mainFooter : styles.footer}>
      <div className={styles.copyright}>
        <Typography.Title className={styles.text} tag="div" view='xsmall' font='styrene' color="tertiary">&copy;ООО "Альфа Фьюче Пипл", 2022</Typography.Title>
      </div>
      {isPageMain && <div className={styles.policy}>
        <Link href="/policy">
          <Typography.Title className={styles.text} tag="div" view='xsmall' font='styrene' color="tertiary">
            Политика в отношении обработки персональных данных
          </Typography.Title>
        </Link>
      </div>
      }
    </div>
  );
}

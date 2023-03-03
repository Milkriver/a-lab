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
        <Typography.TitleResponsive className={styles.text} tag="div" view='xsmall' font='styrene' color="tertiary">&copy;ООО "Альфа Фьюче Пипл", 2022</Typography.TitleResponsive>
      </div>
      {isPageMain && <div className={styles.policy}>
        <Link href="/policy">
          <Typography.TitleResponsive className={styles.text} tag="div" view='xsmall' font='styrene' color="tertiary">
            Политика в отношении обработки персональных данных
          </Typography.TitleResponsive>
        </Link>
      </div>
      }
    </div>
  );
}

import styles from './index.module.css';
import { BurgerMIcon } from '@alfalab/icons/glyph/dist/BurgerMIcon';
import { useState } from 'react';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { Link } from '@alfalab/core-components/link';
import { Menu } from '../../menu';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(prev => !prev);



  return (
    <div className={styles.header}>
      <Link href={'/'}><Typography.TitleResponsive tag='h1' color="accent" weight="bold"> A-Store</Typography.TitleResponsive></Link>
      <div className={styles.menuButton} onClick={handleModalOpen}>
        <BurgerMIcon />
        <Gap size='l' />
        <Typography.TitleResponsive className={styles.text} tag='h1' view='medium' color="primary" weight="bold">
          меню
        </Typography.TitleResponsive>
      </div>
      <Menu open={open} onClose={handleModalOpen} />

     
    </div>
  );
}

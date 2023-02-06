import styles from './index.module.css';
import { BurgerMIcon } from '@alfalab/icons/glyph/dist/BurgerMIcon';
import { useState } from 'react';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { Drawer } from '@alfalab/core-components/drawer';
import { Menu } from '../menu';
import { Link } from '@alfalab/core-components/link';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(prev => !prev);

  return (
    <div className={styles.header}>
      <Typography.Title tag='h1' color="accent" weight="bold"><Link href="#" children={undefined}></Link> A-Store</Typography.Title>
      <div className={styles.menuButton} onClick={handleModalOpen}>
        <BurgerMIcon />
        <Gap size='s' />
        <Typography.Title tag='h1' view='medium' color="primary" weight="bold">
          меню
        </Typography.Title>
      </div>
      <Drawer open={open} onClose={handleModalOpen}>
        <Menu />
      </Drawer>
    </div>
  );
}

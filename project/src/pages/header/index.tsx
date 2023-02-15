import styles from './index.module.css';
import { BurgerMIcon } from '@alfalab/icons/glyph/dist/BurgerMIcon';
import { useState } from 'react';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { SidePanelDesktop } from '@alfalab/core-components/side-panel/desktop';
import { Menu } from '../menu';
import { Link } from '@alfalab/core-components/link';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(prev => !prev);

  return (
    <div className={styles.header}>
      <Link href={'/'}><Typography.Title tag='h1' color="accent" weight="bold"> A-Store</Typography.Title></Link>
      <div className={styles.menuButton} onClick={handleModalOpen}>
        <BurgerMIcon />
        <Gap size='l' />
        <Typography.Title className={styles.text} tag='h1' view='medium' color="primary" weight="bold">
          меню
        </Typography.Title>
      </div>
      <SidePanelDesktop open={open} onClose={handleModalOpen}>
        <SidePanelDesktop.Header hasCloser={true} />
        <Menu />
      </SidePanelDesktop>
    </div>
  );
}

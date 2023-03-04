import styles from './index.module.css';
import { BurgerMIcon } from '@alfalab/icons/glyph/dist/BurgerMIcon';
import { useState } from 'react';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { Link } from '@alfalab/core-components/link';
import { Menu } from '../../menu';
import { ModalShoppingCart } from '../../modal-shopping-cart';
import { ShoppingBagMIcon } from '@alfalab/icons/glyph/dist/ShoppingBagMIcon';
// import { BasketLineMIcon } from '@alfalab/icons/glyph/dist/BasketLineMIcon';
import { Circle } from '@alfalab/core-components/icon-view/circle';
// import { Badge } from '@alfalab/core-components/badge';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(prev => !prev);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartModalOpen = () => setIsCartOpen(prev => !prev);

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

      <div className={styles.shoppingCartButton} onClick={handleCartModalOpen}>
        <Circle
          backgroundColor='#ef3124'
          size={80}
          bottomAddons={
            <Circle backgroundColor='black' size={24}>
              <Typography.Title className={styles.badge} tag='div'>
                2
              </Typography.Title>
            </Circle>
          }
        >
          <ShoppingBagMIcon color='white' />
        </Circle>
      </div>
      <ModalShoppingCart open={isCartOpen} onClose={handleCartModalOpen} />
    </div>
  );
}

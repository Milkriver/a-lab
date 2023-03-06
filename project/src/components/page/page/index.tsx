import { Footer } from '../footer';
import { Header } from '../header';
import { ModalShoppingCart } from '../../modal-shopping-cart';
import { ShoppingBagMIcon } from '@alfalab/icons/glyph/dist/ShoppingBagMIcon';
import { Typography } from '@alfalab/core-components/typography';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { useAppSelector } from '../../../store';
import { countSelector } from '../../../store/order';
import styles from './index.module.css';
import { useState } from 'react';
import { Cart } from '../../modal-cart-form';

type TProps = {
  children: React.ReactNode;
  isPageMain?: boolean;
}

export const Page = ({ children, isPageMain }: TProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartModalOpen = () => setIsCartOpen(prev => !prev);

  const [modalOrderForm, setModalOrderForm] = useState(false);
  const handleModalOrderForm = () => setModalOrderForm(prev => !prev);

  const itemsCount = useAppSelector(countSelector);
  return (
    <>
      <Header />
      <div className={isPageMain ? '' : styles.container}>  {children}</div>

      {(itemsCount > 0) &&
        <div className={styles.shoppingCartButton} onClick={handleCartModalOpen}>
          <Circle
            backgroundColor='#ef3124'
            size={80}
            bottomAddons={
              <Circle backgroundColor='black' size={24}>
                <Typography.Title className={styles.badge} tag='div'>
                  {itemsCount}
                </Typography.Title>
              </Circle>
            }
          >
            <ShoppingBagMIcon color='white' />
          </Circle>
        </div>
      }
      {isCartOpen && <ModalShoppingCart open={isCartOpen} onClose={handleCartModalOpen} onNextCartModalOpen={handleModalOrderForm}/>}
      {modalOrderForm && <Cart open={modalOrderForm} onClose={handleModalOrderForm}/>}
      <Footer isPageMain={isPageMain} />
    </>
  );
}


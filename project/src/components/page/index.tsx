import { useState } from 'react';
import { Cart } from '../modal-cart-form';
import { CartBadge } from '../cart-badge';
import { Footer } from './footer';
import { Header } from './header';
import { ShoppingCart } from '../shopping-cart';
import styles from './index.module.css';

type TProps = {
  children: React.ReactNode;
  isPageMain?: boolean;
}

export const Page = ({ children, isPageMain }: TProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalOrderForm, setModalOrderForm] = useState(false);

  const handleCartModalOpen = () => setIsCartOpen(prev => !prev);
  const handleModalOrderForm = () => setModalOrderForm(prev => !prev);

  return (
    <>
      <Header />
      <div className={isPageMain ? '' : styles.container}>
        {children}
      </div>
      <CartBadge handleCartOpen={handleCartModalOpen} />
      <ShoppingCart open={isCartOpen} onClose={handleCartModalOpen} onNextCartModalOpen={handleModalOrderForm} />
      <Cart open={modalOrderForm} onClose={handleModalOrderForm} />
      <Footer isPageMain={isPageMain} />
    </>
  );
}

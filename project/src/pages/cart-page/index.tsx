import { Footer } from '../footer';
import { Header } from '../header';
import styles from './index.module.css';

export const CartPage = () => {
  return (
    <div className={styles.cartPage}>
      <Header />
      <Footer />
    </div>
  );
}

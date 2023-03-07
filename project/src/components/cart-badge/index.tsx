import { ShoppingBagMIcon } from '@alfalab/icons/glyph/dist/ShoppingBagMIcon';
import { Typography } from '@alfalab/core-components/typography';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { useAppSelector } from '../../store';
import { countSelector } from '../../store/order';
import styles from './index.module.css';

type TProps = {
  handleCartOpen: () => void;
}

export const CartBadge = ({ handleCartOpen }: TProps) => {
  const itemsCount = useAppSelector(countSelector);

  if (itemsCount === 0)
    return null;

  return (
    <div className={styles.shoppingCartButton} onClick={handleCartOpen}>
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
  );
}


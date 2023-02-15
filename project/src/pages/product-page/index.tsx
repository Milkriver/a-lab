import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { Button } from '@alfalab/core-components/button';
import { Footer } from '../footer';
import { Header } from '../header';
import { Gallery } from '@alfalab/core-components/gallery';
import { Select } from '@alfalab/core-components/select';
import { useState } from 'react';
import styles from './index.module.css';
import { TOptions } from '../../types';

export const ProductPage = () => {
  const product = require('../../mocks/products.json').products[1];
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(product.preview);
  const closeGallery = () => setOpen(false);
  const sizes: TOptions = [];
  const colors: TOptions = [];
  if (product.sizes) {
    product.sizes.map((size: string) => sizes.push({ key: size, option: size }));
  }
  if (product.colors) {
    product.colors.map((size: string) => colors.push({ key: size, option: size }));
  }
  return (
    <div className={styles.productPage}>
      <Header />
      <div className={styles.pageWrapper}>
        <div>
          <img className={styles.pageImage} src={activeImage} alt={product.title} />
          <Gap size='xl' />
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '850px' }}>
              {product.images.map((image: string) => (
                <div className={styles.imageWrapper} key={image} onClick={() => setActiveImage(image)} style={{ backgroundImage: `url(${image})` }} />
              ))}
            </div>
            <Gallery
              open={open}
              onClose={closeGallery}
              images={product.images}
            />
          </div>
        </div>
        <div className={styles.productInfo}>
          <Typography.Title tag='h6' view='small' color="primary">{product.title}</Typography.Title>
          <Gap size='xl' />
          <Typography.Title tag='h6' view='small' color="primary" weight='bold'>{product.price}&#8381;</Typography.Title>
          {product.sizes && <>
            <Gap size='xl' />
            <Select options={sizes} size='l' allowUnselect={true} placeholder='Выберите размер' />
          </>
          }
          {product.colors && <>
            <Gap size='xl' />
            <Select options={colors} size='s' placeholder='Выберите цвет' />
          </>
          }
          <Gap size='xl' />
          <Button view='primary'>В корзину</Button>
          <Gap size='xl' />
          <Typography.Text className={styles.description} tag='div' view='primary-large' color="primary">{product.description}</Typography.Text>
        </div>
      </div>
      <Footer isPageMain={false} />
    </div>
  );
}

import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { Button } from '@alfalab/core-components/button';
import { Footer } from '../footer';
import { Header } from '../header';
import { Gallery } from '@alfalab/core-components/gallery';
import { Select, BaseSelectChangePayload } from '@alfalab/core-components/select';
import { useState } from 'react';
import styles from './index.module.css';
import { TOptions } from '../../types';

export const ProductPage = () => {
  const product = require('../../mocks/products.json').products[1];
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [activeImage, setActiveImage] = useState(product.preview);
  const closeGallery = () => setOpen(false);
  const sizes: TOptions = [];
  const colors: TOptions = [];
  if (product.sizes) {
    product.sizes.map((size: string, index: number) => sizes.push({ key: (index + 1).toString(), content: size }));
  }
  if (product.colors) {
    product.colors.map((color: string, index: number) => colors.push({ key: (index + 1).toString(), content: color }));
  }
  const handleSize = (evtPayload: BaseSelectChangePayload) => {
    if (evtPayload?.selected) {
        const selectValue = evtPayload.selected.content as string;
        setSize(selectValue);
      }
}
const handleColor = (evtPayload: BaseSelectChangePayload) => {
  if (evtPayload?.selected) {
      const selectValue = evtPayload.selected.content as string;
      setColor(selectValue);
    }
}
  return (
    <div className={styles.productPage}>
      <Header />
      <div className={styles.pageWrapper}>
        <div className={styles.galleryWrapper}>
          <img className={styles.pageImage} src={activeImage} alt={product.title} />
          <Gap size='xl' />
          <div>
            <div className={styles.gallery}>
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
            <Select
                size='s'
                allowUnselect={false}
                options={sizes}
                placeholder='Выберите размер'
                onChange={handleSize}
                selected={size ? sizes.find(x => x.content === size)!.key : null}
            />       
          </>
          }
          {product.colors && <>
            <Gap size='xl' />
            <Select
                size='s'
                allowUnselect={false}
                options={colors}
                placeholder='Выберите цвет'
                onChange={handleColor}
                selected={color ? colors.find(x => x.content === color)!.key : null}
            />  
          </>
          }
          <Gap size='xl' />
          <Button view='primary'>В корзину</Button>
          <Gap size='xl' />
          <Typography.Text className={styles.description} tag='div' view='primary-large' color="primary">{product.description}</Typography.Text>
        </div>
      </div>
      <Footer />
    </div>
  );
}

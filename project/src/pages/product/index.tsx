import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { Button } from '@alfalab/core-components/button';
import { Gallery } from '@alfalab/core-components/gallery';
import { BaseSelectChangePayload } from '@alfalab/core-components/select';
import { SelectResponsive } from '@alfalab/core-components/select/responsive';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { TOptions } from '../../types';
import { Page } from '../../components/page/page';
import { Grid } from '@alfalab/core-components/grid';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { cardSelector, productsActions } from '../../store/products';

export const Product = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [activeImage, setActiveImage] = useState('');
  const product = useAppSelector(cardSelector);
  const dispatch = useAppDispatch();
  const closeGallery = () => setOpen(false);
  const sizes: TOptions = [];
  const colors: TOptions = [];

  const { productId } = useParams();

  useEffect(() => {
    const productNumber = Number(productId)
    if (!isNaN(productNumber))
      dispatch(productsActions.cardRequest(productNumber))
  }, [dispatch, productId]);

  useEffect(() => {
    if (product && product.images && product.images.length > 0)
      setActiveImage(product.images[0])
  }, [product]);

  if (!product)
    return null;

  const renderProductAttribute = (attribute: TOptions, array: string[]) => array.map((element, index) => attribute.push({ key: (index + 1).toString(), content: element }));
  const handleSize = (evtPayload: BaseSelectChangePayload) => setSize(evtPayload.selected?.content as string);
  const handleColor = (evtPayload: BaseSelectChangePayload) => setColor(evtPayload.selected?.content as string);

  if (product.sizes)
    renderProductAttribute(sizes, product.sizes);

  if (product.colors)
    renderProductAttribute(colors, product.colors);

  const renderProductAttributeSelect = (attribute: string, attributes: TOptions, handler: (evtPayload: BaseSelectChangePayload) => void, placeholder: string) => {
    return (<>
      <Gap size='xl' />
      <SelectResponsive
        size='s'
        allowUnselect={false}
        options={attributes}
        placeholder={placeholder}
        onChange={handler}
        selected={attribute ? attributes.find(x => x.content === attribute)!.key : null}
      />
    </>
    )
  };
  return (
    <Page>
      <div className={styles.pageWrapper}>
        <Grid.Row align='top' justify="left">
          <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 6 }}>
            <img className={styles.pageImage} src={activeImage} alt={product.title} />
            <Gap size='xl' />
            <div>
              <div className={styles.gallery}>
                {product.images && product.images.map((image: string) => (
                  <div className={styles.imageWrapper} key={image} onClick={() => setActiveImage(image)} style={{ backgroundImage: `url(${image})` }} />
                ))}
              </div>
              {(product.images) &&
                <Gallery
                  open={open}
                  onClose={closeGallery}
                  images={product.images.map(src => ({ src }))}
                />
              }
            </div>
          </Grid.Col>
          <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 6 }}>
            <div className={styles.productInfo}>
              <Typography.TitleResponsive tag='h6' view='small' color="primary">{product.title}</Typography.TitleResponsive>
              <Gap size='xl' />
              <Typography.TitleResponsive tag='h6' view='small' color="primary" weight='bold'>{product.price}&#8381;</Typography.TitleResponsive>
              {product.sizes && renderProductAttributeSelect(size, sizes, handleSize, 'Выберите размер')}
              {product.colors && renderProductAttributeSelect(color, colors, handleColor, 'Выберите цвет')}
              <Gap size='xl' />
              <Button view='primary'>В корзину</Button>
              <Gap size='xl' />
              <Typography.Text className={styles.description} tag='div' view='primary-large' color="primary">{product.description}</Typography.Text>
            </div>
          </Grid.Col>
        </Grid.Row>
      </div>
    </Page>
  );
}

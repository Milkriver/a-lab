import { configureMockStore } from '@jedmao/redux-mock-store';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Product } from './index';

describe('Page: Product', () => {
  it('should change active image', () => {
    const card = {
      id: 1,
      preview: 'http://src',
      title: 'titleCard',
      price: 200,
      availability: true,
      description: 'descriptionCard',
      images: ['http://srcImage1', 'http://srcImage2']
    };

    const mockStore = configureMockStore();

    const store = mockStore({
      products: {
        card
      }
    });

    render(
      <Provider store={store}>
        <Product />
      </Provider>);

    const element = screen.getByTestId('active-image')
    expect(element.style.backgroundImage).toEqual('url(http://srcImage1)');

    const previewImages = screen.getAllByTestId('preview-image')
    expect(previewImages).toHaveLength(2);

    fireEvent.click(previewImages[1]);
    expect(element.style.backgroundImage).toEqual('url(http://srcImage2)');
  });
});

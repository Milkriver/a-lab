import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Product } from './index';

describe('Page: Product snapshot', () => {
  it('should render correctly', () => {
    const card = {
      id: 1,
      preview: 'http://src',
      title: 'titleCard',
      price: 200,
      availability: true,
      description: 'descriptionCard',
      images: ['http://srcImage']
    };

    const store = configureMockStore()({
      products: {
        card
      }
    });

    const { container } = render(
      <Provider store={store}>
        <Product />
      </Provider>);

    expect(container).toMatchSnapshot();
  });
});

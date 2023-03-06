import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AlfaMade } from './index';

const mockStore = configureMockStore();

describe('Page: AlfaMade', () => {
  it('should render correctly', () => {

    const previewProducts = [{
      id: 1,
      preview: 'http://src',
      title: 'productTitle',
      price: 1000,
      availability: true,
    }];

    const store = mockStore({
      products: {
        previewProducts
      },
      order: {
        positions: [],
        sum: 0,
        count: 0,
      },
    });

    const { container } = render(
      <Provider store={store}>
        <AlfaMade />
      </Provider>);
    expect(container).toMatchSnapshot();
  });
});

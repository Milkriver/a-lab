import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Contacts } from './index'
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
describe('Contacts', () => {
  test('loads and displays Contacts', async () => {
    const store = mockStore({
      order: {
        count: 0,
        positions: [],
        sum: 0
      },
    });
    render(
      <Provider store={store}>
        <Contacts />
      </Provider>
    )
    const email = await screen.findByText('info@alfabankstore.ru')
    expect(email).toHaveTextContent('info@alfabankstore.ru')
  });
})


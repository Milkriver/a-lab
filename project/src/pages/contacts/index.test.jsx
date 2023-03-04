import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Contacts } from './index'

describe('Contacts', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({
        matches: false,
        addListener: () => { },
        removeListener: () => { }
      })
    });
  });
  test('loads and displays Contacts', async () => {
    render(<Contacts />)
    const email = await screen.findByText('info@alfabankstore.ru')
    expect(email).toHaveTextContent('info@alfabankstore.ru')
  });
})


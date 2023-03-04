import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from './index'

describe('Header', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({
        matches: false,
        addListener: () => { },
        removeListener: () => { }
      })
    });
  });
  test('loads and displays header', async () => {
    render(<Header />)
    const link = await screen.findByRole('link')
    expect(link).toHaveTextContent('A-Store')
  });
})


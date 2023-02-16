import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from './index'

describe('Footer', () => {
  test('loads and displays footer isPageMain=true', async () => {
    render(<Footer isPageMain={true} />)
    const link = await screen.findByRole('link')
    expect(link).toHaveTextContent('Политика')
  });
  test('loads and displays footer isPageMain=false', async () => {
    render(<Footer isPageMain={false} />)
    expect(screen.queryByText(/Политика/i)).not.toBeInTheDocument();
  });
})


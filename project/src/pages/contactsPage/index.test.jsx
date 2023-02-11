import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ContactsPage } from './index'

describe('ContactsPage', () => {
  test('loads and displays ContactsPage', async () => {
    render(<ContactsPage />)
    const link = await screen.findByText('info@alfabankstore.ru')
    expect(link).toHaveTextContent('info@alfabankstore.ru')
  });
})


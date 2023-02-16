import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ContactsPage } from './index'

describe('ContactsPage', () => {
  test('loads and displays ContactsPage', async () => {
    render(<ContactsPage />)
    const email = await screen.findByText('info@alfabankstore.ru')
    expect(email).toHaveTextContent('info@alfabankstore.ru')
  });
})


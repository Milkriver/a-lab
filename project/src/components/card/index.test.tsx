import { render, screen } from '@testing-library/react'
import { TCard } from '../../types'
import { Card } from './index'

describe('Card', () => {
  it(`loads and displays Card`, async () => {
    const card: TCard = {
      id: 1,
      preview: 'http://src1',
      images: [
        'http://qa-games.ru/astore/public/images/68519498.jpeg',
        'http://qa-games.ru/astore/public/images/56653281.jpeg'
      ],
      title: 'Футболка Для умных и свободных',
      description: 'Мягкая хлопковая',
      price: 200,
      availability: true
    }

    render(<Card card={card} />)

    expect(screen.getByText('Футболка Для умных и свободных')).toBeDefined();
  })
})

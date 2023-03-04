import { fireEvent, render, screen } from '@testing-library/react'
import { Menu } from './index'

describe('Menu', () => {
  it(`loads and displays Menu`, async () => {
    const clickHandler = jest.fn();
    render(<Menu open={true} onClose={clickHandler} />)

    expect(screen.getByText('Сделано в Альфе')).toBeDefined();
    expect(screen.getByText('Свой дизайн')).toBeDefined();
    expect(screen.getByText('Контакты')).toBeDefined();
    expect(clickHandler).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button'))
    expect(clickHandler).toHaveBeenCalled();
  })
})

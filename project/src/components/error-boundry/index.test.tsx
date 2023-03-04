import { render, screen } from '@testing-library/react'
import { ErrorBoundary } from './index'

const Child = () => {
  throw new Error()
}

describe('Error Boundary', () => {
  beforeAll(() => {
    console.error = jest.fn();
  });

  it(`should render error boundary component with error`, async () => {
    render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>)

    const errorMessage = await screen.findByText('Возникла ошибка.')
    expect(errorMessage).toBeDefined()
  })
})

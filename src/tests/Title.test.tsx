import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Title from '../components/Title'

test('displays title', async () => {
  render(<Title mainTitle="Test title" />)

  expect(screen.getByText('Test title')).toBeInTheDocument()
})

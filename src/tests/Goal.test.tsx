import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Goal from '../components/Goal'

const goalMock = {
  id: '1',
  title: 'Reading every day',
  progress: 0,
  done: false,
}

describe('Goal component', () => {
  test('render goal', () => {
    render(<Goal {...goalMock} />)

    expect(
      screen.getByText('My goal is: Reading every day'),
    ).toBeInTheDocument()
  })
})

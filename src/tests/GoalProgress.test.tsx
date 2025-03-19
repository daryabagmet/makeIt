import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GoalProgress from '../components/GoalProgress'

describe('Progress component', () => {
  test('render progress row', () => {
    render(<GoalProgress progress={60} />)

    const progressElement = screen.getByTestId('progress-row')

    expect(progressElement).toBeInTheDocument()
    expect(progressElement.childElementCount).toBe(100)
  })
})

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AllGoalsList from '../components/AllGoalsList'

export const goalsMockList = [
  {
    id: '1',
    title: 'Test Goal 1',
    progress: 10,
    done: false,
  },
  {
    id: '2',
    title: 'Test Goal 2',
    progress: 50,
    done: false,
  },
  {
    id: '3',
    title: 'Test Goal 3',
    progress: 75,
    done: false,
  },
]

describe('All goals list', () => {
  test('does not render goals if there are no goals', () => {
    render(<AllGoalsList goals={[]} />)

    const goalList = screen.queryByTestId('all-goals-list')
    expect(goalList).not.toBeInTheDocument()
  })

  test('render goals list', () => {
    render(<AllGoalsList goals={goalsMockList} />)

    const goalList = screen.queryByTestId('all-goals-list')
    expect(goalList).toBeInTheDocument()
    expect(goalList?.childElementCount).toBe(3)
  })
})

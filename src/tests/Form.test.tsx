import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../components/Form'
import { vi } from 'vitest'
import { GoalType } from '../components/Goal'

const goalsMockList: GoalType[] = []

const addGoalMock = vi.fn((title: string) => {
  const newTestGoal = {
    id: '1',
    title,
    progress: 0,
    done: false,
  }

  goalsMockList.push(newTestGoal)
})

vi.mock('../data/useDataStore', () => ({
  useDataStore: vi.fn(() => ({
    goals: goalsMockList,
    currentGoal: null,
    addGoal: addGoalMock,
  })),
}))

describe('Main form', () => {
  test('render form', () => {
    renderForm()

    const formTitle = screen.getByText(
      'What I want to achieve in next 100 days?',
    )
    const formInput = screen.getByTestId('add-goal-input')
    const formAddButton = screen.getByTestId('add-goal-btn')

    expect(formTitle).toBeInTheDocument()
    expect(formInput).toBeInTheDocument()
    expect(formAddButton).toBeInTheDocument()
  })

  test('add new goal', () => {
    renderForm()

    const formInput = screen.getByTestId('add-goal-input')
    const formAddButton = screen.getByTestId('add-goal-btn')

    fireEvent.change(formInput, {
      target: { value: 'Reading 10 pages every day' },
    })
    fireEvent.click(formAddButton)

    expect(addGoalMock).toHaveBeenCalledTimes(1)
    expect(addGoalMock).toHaveBeenCalledWith('Reading 10 pages every day')
    expect(formInput).toHaveValue('')
    expect(goalsMockList).toHaveLength(1)
  })
})

const renderForm = () => {
  render(<Form addGoal={addGoalMock} />)
}

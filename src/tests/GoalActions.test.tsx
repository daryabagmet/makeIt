import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GoalActions, { GoalActionsPropsType } from '../components/GoalActions'
import { vi } from 'vitest'
import { GoalType } from '../components/Goal'
import { goalsMockList } from './AllGoalsList.test'

const goalMock: GoalType = {
  id: '4',
  title: 'Test Goal 4',
  progress: 50,
  done: false,
}

const allGoalsMockList = [goalMock, ...goalsMockList]

const editGoalMock = vi.fn()
const setCurrentGoalMock = vi.fn()
const removeGoalMock = vi.fn((id: string) => {
  const index = allGoalsMockList.findIndex(goal => goal.id === id)
  if (index !== -1) {
    allGoalsMockList.splice(index, 1) 
  }
})

vi.mock('../data/useDataStore', () => ({
  useDataStore: vi.fn(() => ({
    goals: allGoalsMockList,
    currentGoal: null,
    editGoal: editGoalMock,
    removeGoal: removeGoalMock,
    setCurrentGoal: setCurrentGoalMock,
  })),
}))

describe('Goal actions', () => {
  test('render actions icon', () => {
    renderActions()

    const actionsWrapper = screen.getByTestId('goal-actions-btn')

    expect(actionsWrapper).toBeInTheDocument()
  })

  test('call setIsEditing when the edit button is clicked', () => {
    renderActions()

    const editButton = screen.getByTestId('goal-edit-btn')
    fireEvent.click(editButton)

    expect(editGoalMock).toHaveBeenCalledTimes(1)
  })

  test('save new title when the save button is clicked', () => {
    renderActions({ isEditing: true, newTitle: 'Updated Goal Title' })

    const saveButton = screen.getByTestId('goal-save-btn')
    if (saveButton) fireEvent.click(saveButton)

    expect(editGoalMock).toHaveBeenCalledWith(goalMock.id, 'Updated Goal Title')
  })

  test('set current goal when the toggle current goal button is clicked', () => {
    renderActions()

    const toggleButton = screen.getByTestId('goal-toggle-btn')
    fireEvent.click(toggleButton)

    expect(setCurrentGoalMock).toHaveBeenCalledWith(goalMock)
  })

  test('remove goal when the delete button is clicked', () => {
    renderActions()

    const deleteButton = screen.getByTestId('goal-delete-btn')
    fireEvent.click(deleteButton)

    expect(removeGoalMock).toHaveBeenCalledTimes(1)
    expect(removeGoalMock).toHaveBeenCalledWith(goalMock.id)
    expect(allGoalsMockList).toHaveLength(3)
  })
})

const renderActions = (
  options: Partial<GoalActionsPropsType> = { isEditing: false, newTitle: '' },
) => {
  return render(
    <GoalActions
      id="4"
      setIsEditing={editGoalMock}
      isEditing={false}
      newTitle=""
      {...options}
    />,
  )
}

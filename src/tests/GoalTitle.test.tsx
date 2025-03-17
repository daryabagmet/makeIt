import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { expect, vi } from 'vitest'
import GoalTitle, { GoalTitlePropsType } from '../components/GoalTitle'
import { GoalType } from '../components/Goal'

const doActivityMock = vi.fn()
const undoActivityMock = vi.fn()
const markDoneMock = vi.fn()

vi.mock('../data/useDataStore', () => ({
  useDataStore: vi.fn(() => ({
    doActivity: doActivityMock,
    undoActivity: undoActivityMock,
    markDone: markDoneMock,
  })),
}))

const goalMock: GoalType = {
  id: '1',
  title: 'Test Goal',
  progress: 50,
  done: false,
}

describe('GoalTitle', () => {
  test('render input when editing is true', () => {
    renderTitle({ isEditing: true })

    const inputElement = screen.getByTestId('edit-title-input')
    expect(inputElement).toBeInTheDocument()
  })

  test('render the goal title when editing is false', () => {
    renderTitle()

    const titleElement = screen.getByText('My goal is: Test Goal')
    expect(titleElement).toBeInTheDocument()
  })

  test('call doActivity when the "Do activity" button is clicked', () => {
    renderTitle()

    const doActivityButton = screen.getByTestId('do-activity-button')
    fireEvent.click(doActivityButton)

    expect(doActivityMock).toHaveBeenCalledTimes(1)
  })

  test('call undoActivity when the "Undo activity" button is clicked', () => {
    renderTitle()

    const undoActivityButton = screen.getByTestId('undo-activity-button')
    fireEvent.click(undoActivityButton)

    expect(undoActivityMock).toHaveBeenCalledTimes(1)
  })

  test('call markDone when progress is 100', () => {
    const completedGoal = { ...goalMock, progress: 100 }

    renderTitle({ goal: completedGoal })

    expect(markDoneMock).toHaveBeenCalledTimes(1)
  })
})

const renderTitle = (options: Partial<GoalTitlePropsType> = {}) => {
  const mockOnTitleChange = vi.fn()

  return render(
    <GoalTitle
      isEditing={false}
      newTitle={''}
      onTitleChange={mockOnTitleChange}
      goal={goalMock}
      {...options}
    />,
  )
}

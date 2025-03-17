import { CheckIcon, UndoIcon } from 'lucide-react'
import { useEffect, useMemo } from 'react'
import { useDataStore } from '../data/useDataStore'
import { GoalType } from './Goal'

interface GoalTitlePropsType {
  isEditing: boolean
  newTitle: string
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  goal: GoalType
}

const GoalTitle: React.FC<GoalTitlePropsType> = ({
  isEditing,
  newTitle,
  onTitleChange,
  goal,
}) => {
  const { doActivity, undoActivity, markDone } = useDataStore()
  const { progress, title, id } = goal
  const cardTitle = useMemo(
    () =>
      progress === 100
        ? `My goal of ${title} is completed!`
        : `My goal is: ${title}`,
    [goal],
  )

  useEffect(() => {
    if (progress === 100) markDone(id)
  }, [progress])

  const handleDoProgress = () => {
    doActivity(id)
  }

  const handleUndoProgress = () => {
    undoActivity(id)
  }

  return isEditing ? (
    <input
      type="text"
      value={newTitle}
      onChange={onTitleChange}
      className="border border-gray-300 rounded mb-2"
    />
  ) : (
    <div className="flex gap-2 justify-between align-middle">
      <h2 className="text-lg font-semibold mb-2">{cardTitle}</h2>
      <div className="flex gap-4">
        <button
          className="flex gap-0.5 text-violet-500"
          onClick={handleDoProgress}
        >
          <CheckIcon className="w-6 h-6 text-violet-600" />
          Do activity
        </button>
        <button
          className="flex gap-0.5 text-violet-500"
          onClick={handleUndoProgress}
        >
          <UndoIcon className="w-6 h-6 text-violet-600" />
          Undo
        </button>
      </div>
    </div>
  )
}

export default GoalTitle

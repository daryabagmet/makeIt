import { PencilIcon, SaveIcon, SparklesIcon, Trash2Icon } from 'lucide-react'
import { useData } from '../data/hooks/useData'
import { GoalType } from './Goal'

interface GoalActionsPropsType {
  id: string
  isEditing: boolean
  setIsEditing: (isEditing: boolean) => void
  newTitle: string
}

const GoalActions: React.FC<GoalActionsPropsType> = ({
  id,
  isEditing,
  setIsEditing,
  newTitle,
}) => {
  const {
    state: { goals, currentGoal },
    actions,
  } = useData()
  const { editGoal, removeGoal, setCurrentGoalAction } = actions

  const iconClassStr = `w-6 h-6 text-violet-500 ${
    currentGoal?.id === id ? 'fill-current' : ''
  }`

  const handleGoalEdit = () => {
    setIsEditing(true)
  }

  const handleDeleteGoal = (id: string) => {
    removeGoal(id)
  }

  const handleSave = (id: string) => {
    editGoal(id, newTitle)
    setIsEditing(false)
  }

  const toggleCurrentGoal = (id: string) => {
    const newGoal = goals.find((goal) => goal.id === id) || null

    setCurrentGoalAction((prev: GoalType | null) =>
      prev?.id === id ? null : newGoal,
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <button onClick={() => toggleCurrentGoal(id)}>
        <SparklesIcon className={iconClassStr} />
      </button>
      <div className="flex gap-2">
        {!isEditing && (
          <button onClick={handleGoalEdit}>
            <PencilIcon className="w-6 h-6 text-violet-500" />
          </button>
        )}
        {isEditing && (
          <button onClick={() => handleSave(id)} className="text-violet-500">
            <SaveIcon className="w-6 h-6 text-violet-500" />
          </button>
        )}
      </div>
      <button onClick={() => handleDeleteGoal(id)}>
        <Trash2Icon className="w-6 h-6 text-violet-500" />
      </button>
    </div>
  )
}

export default GoalActions

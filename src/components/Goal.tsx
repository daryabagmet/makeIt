import {
  GoalIcon,
  MedalIcon,
  PencilIcon,
  SaveIcon,
  SparklesIcon,
  Trash2Icon,
} from 'lucide-react'
import * as React from 'react'
import { useState } from 'react'
import { useData } from '../data/hooks/useData'

export interface GoalType {
  id: string
  title: string
  progress: number
  done: boolean
}

const Goal: React.FC<GoalType> = ({ id, title, progress }) => {
  const { state, actions } = useData()
  const goals = state.goals
  const currentGoal = state.currentGoal
  const { editGoal, removeGoal, setCurrentGoalAction } = actions
  const cardTitle =
    progress === 100
      ? `My goal of ${title} is completed!`
      : `My goal is: ${title}`
  const icon =
    progress === 100 ? (
      <MedalIcon className="w-10 h-10 text-violet-500" />
    ) : (
      <GoalIcon className="w-10 h-10 text-violet-500" />
    )
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const cardClasasStr =
    currentGoal?.id === id
      ? 'bg-white rounded-lg shadow-lg p-6 border border-violet-600 my-2 flex gap-4'
      : 'bg-white rounded-lg shadow-md p-6 border border-violet-300 my-2 flex gap-4'
  const iconClassStr =
    currentGoal?.id === id
      ? 'w-6 h-6 text-violet-500 fill-current'
      : 'w-6 h-6 text-violet-500'

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
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

  const handleGoalEdit = () => {
    setIsEditing(true)
  }

  const handleDeleteGoal = (id: string) => {
    removeGoal(id)
  }

  return (
    <div key={id} className={cardClasasStr}>
      {icon}
      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            className="border border-gray-300 rounded mb-2"
          />
        ) : (
          <h2 className="text-lg font-semibold mb-2">{cardTitle}</h2>
        )}
        <div className="text-gray-700">Progress: {progress} / 100</div>
      </div>
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
    </div>
  )
}

export default Goal

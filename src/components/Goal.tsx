import { useState } from 'react'
import { GoalIcon, MedalIcon } from 'lucide-react'
import GoalProgress from './GoalProgress'
import GoalActions from './GoalActions'
import GoalTitle from './GoalTitle'

export interface GoalType {
  id: string
  title: string
  progress: number
  done: boolean
}

const Goal: React.FC<GoalType> = ({ id, title, progress, done }) => {
  const icon =
    progress === 100 ? (
      <MedalIcon className="w-10 h-10 text-violet-500" />
    ) : (
      <GoalIcon className="w-10 h-10 text-violet-500" />
    )
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }

  return (
    <div
      key={id}
      className="bg-white rounded-lg p-6 my-2 flex gap-4 border border-violet-400 shadow-md"
    >
      {icon}
      <div className="flex-1">
        <GoalTitle
          isEditing={isEditing}
          newTitle={newTitle}
          onTitleChange={handleTitleChange}
          goal={{ id, title, progress, done }}
        />

        <GoalProgress progress={progress} />
      </div>
      <GoalActions
        id={id}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        newTitle={newTitle}
      />
    </div>
  )
}

export default Goal

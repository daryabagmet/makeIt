import { createContext } from 'react'
import { GoalType } from '../components/Goal'

interface DataStateType {
  goals: GoalType[]
  currentGoal: GoalType | null
}

interface DataActionsType {
  addGoal: (goal: string) => void
  removeGoal: (id: string) => void
  editGoal: (id: string, updatedTitle: string) => void
  setCurrentGoalAction: (goal: GoalType | null) => void
  doActivity: (id: string) => void
  undoActivity: (id: string) => void
}

interface DataContextType {
  state: DataStateType
  actions: DataActionsType
}

export const DataContext = createContext<DataContextType>({
  state: {
    goals: [],
    currentGoal: null,
  },
  actions: {
    addGoal: () => {},
    removeGoal: () => {},
    editGoal: () => {},
    setCurrentGoalAction: () => {},
    doActivity: () => {},
    undoActivity: () => {},
  },
})

import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { GoalType } from '../components/Goal'

interface DataStoreType {
  goals: GoalType[]
  currentGoal: GoalType | null
  addGoal: (goal: string) => void
  removeGoal: (id: string) => void
  editGoal: (id: string, updatedTitle: string) => void
  setCurrentGoal: (goal: GoalType | null) => void
  doActivity: (id: string) => void
  undoActivity: (id: string) => void
  markDone: (id: string) => void
}

export const useDataStore = create<DataStoreType>()(
  persist(
    immer((set) => ({
      goals: [],
      currentGoal: null,
      addGoal: (title) => {
        const newGoal: GoalType = {
          id: uuidv4(),
          title,
          progress: 0,
          done: false,
        }
        set((state) => ({ goals: [...state.goals, newGoal] }))
      },
      removeGoal: (id) => {
        set((state) => ({
          goals: state.goals.filter((goal: GoalType) => goal.id !== id),
          currentGoal: state.currentGoal?.id === id ? null : state.currentGoal,
        }))
      },
      editGoal: (id, updatedTitle) => {
        set((state) => ({
          goals: state.goals.map((goal: GoalType) =>
            goal.id === id ? { ...goal, title: updatedTitle } : goal,
          ),
          currentGoal:
            state.currentGoal?.id === id
              ? { ...state.currentGoal, title: updatedTitle }
              : state.currentGoal,
        }))
      },
      markDone: (id) => {
        set((state) => ({
          goals: state.goals.map((goal: GoalType) =>
            goal.id === id ? { ...goal, done: true } : goal,
          ),
          currentGoal:
            state.currentGoal?.id === id
              ? { ...state.currentGoal, done: true }
              : state.currentGoal,
        }))
      },
      doActivity: (id) => {
        set((state) => ({
          goals: state.goals.map((goal: GoalType) =>
            goal.id === id
              ? { ...goal, progress: Math.min(goal.progress + 1, 100) }
              : goal,
          ),
          currentGoal:
            state.currentGoal?.id === id
              ? {
                  ...state.currentGoal,
                  progress: Math.min(state.currentGoal.progress + 1, 100),
                }
              : state.currentGoal,
        }))
      },
      undoActivity: (id) => {
        set((state) => ({
          goals: state.goals.map((goal: GoalType) =>
            goal.id === id
              ? { ...goal, progress: Math.max(goal.progress - 1, 0) }
              : goal,
          ),
          currentGoal:
            state.currentGoal?.id === id
              ? {
                  ...state.currentGoal,
                  progress: Math.max(state.currentGoal.progress - 1, 0),
                }
              : state.currentGoal,
        }))
      },
      setCurrentGoal: (goal) => set({ currentGoal: goal }),
    })),
    {
      name: 'GOAL',
    },
  ),
)

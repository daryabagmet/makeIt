import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect, useCallback, ReactNode } from 'react'
import { DataContext } from './DataContext'
import { GoalType } from '../components/Goal'

interface DataProviderPropsType {
  children: ReactNode
}

interface InitialStateType {
  goals: GoalType[]
  currentGoal: GoalType | null
}

const LIST_KEY = 'GOAL'
const storedData: string | null = localStorage.getItem(LIST_KEY)

const DataProvider: React.FC<DataProviderPropsType> = ({ children }) => {
  const intialState: InitialStateType = storedData
    ? JSON.parse(storedData)
    : {
        goals: [],
        currentGoal: null,
      }

  const [goals, setGoals] = useState<GoalType[]>(intialState.goals)
  const [currentGoal, setCurrentGoal] = useState<GoalType | null>(
    intialState.currentGoal,
  )

  const addGoal = useCallback((goal: string) => {
    const newGoal = {
      id: uuidv4(),
      title: goal,
      progress: 0,
      done: false,
    }
    setGoals((prevGoals: GoalType[]) => [...prevGoals, newGoal])
  }, [])

  const removeGoal = useCallback((id: string) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
    setCurrentGoal((current) => (current?.id === id ? null : current))
  }, [])

  const editGoal = useCallback((id: string, updatedTitle: string) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, title: updatedTitle } : goal,
      ),
    )
    setCurrentGoal((current) =>
      current?.id === id ? { ...current, title: updatedTitle } : current,
    )
  }, [])

  const doActivity = useCallback((id: string) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id
          ? { ...goal, progress: Math.min(goal.progress + 1, 100) }
          : goal,
      ),
    )
    setCurrentGoal((current) =>
      current?.id === id
        ? { ...current, progress: Math.min(current.progress + 1, 100) }
        : current,
    )
  }, [])

  const undoActivity = useCallback((id: string) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id
          ? { ...goal, progress: Math.max(goal.progress - 1, 0) }
          : goal,
      ),
    )
    setCurrentGoal((current) =>
      current?.id === id
        ? { ...current, progress: Math.max(current.progress - 1, 0) }
        : current,
    )
  }, [])

  const setCurrentGoalAction = useCallback((goal: GoalType | null) => {
    setCurrentGoal(goal)
  }, [])

  useEffect(() => {
    if (goals.length > 0 || currentGoal !== null) {
      localStorage.setItem(LIST_KEY, JSON.stringify({ goals, currentGoal }))
    }
  }, [goals, currentGoal])

  const value = {
    state: {
      goals,
      currentGoal,
    },
    actions: {
      addGoal,
      removeGoal,
      editGoal,
      setCurrentGoalAction,
      doActivity,
      undoActivity,
    },
  }
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataProvider

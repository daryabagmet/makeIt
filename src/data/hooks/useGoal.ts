import { GoalType } from '../../components/Goal'
import { useData } from './useData'

function useGoal(id: string) {
  const {
    state: { goals },
    actions: { doActivity, undoActivity, removeGoal },
  } = useData()
  const goal: GoalType | null =
    goals.find((item: GoalType) => item.id == id) || null

  return {
    goal,
    doActivity,
    undoActivity,
    removeGoal,
  }
}

export default useGoal

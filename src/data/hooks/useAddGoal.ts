import { useData } from './useData'

export function useAddGoal() {
  return useData().actions.addGoal
}

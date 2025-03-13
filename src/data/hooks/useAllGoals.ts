import { useData } from './useData'

export function useAllGoals() {
  return useData().state.goals
}

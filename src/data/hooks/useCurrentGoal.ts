import { useData } from './useData';

export function useCurrentGoal(){
  return useData().state.currentGoal
}
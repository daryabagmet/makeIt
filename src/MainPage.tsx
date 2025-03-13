import { useData } from './data/hooks/useData'
import AllGoalsList from './components/AllGoalsList'
import Form from './components/Form'
import Goal from './components/Goal'
import Title from './components/Title'

const MainPage = () => {
  const { state, actions } = useData()
  const { goals, currentGoal } = state
  const { addGoal } = actions
  const filteredGoals = goals.filter((goal) => goal.id !== currentGoal?.id)

  return (
    <div className="bg-violet-100 ">
      <div className="flex flex-col p-8 h-full min-h-[100vh] m-auto max-w-[70%]">
        <Title />
        <Form addGoal={addGoal} />
        {currentGoal && <Goal {...currentGoal} />}
        <AllGoalsList goals={filteredGoals} />
      </div>
    </div>
  )
}

export default MainPage

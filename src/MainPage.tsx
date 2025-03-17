import { useDataStore } from './data/useDataStore'
import AllGoalsList from './components/AllGoalsList'
import Form from './components/Form'
import Goal from './components/Goal'
import Title from './components/Title'

const MainPage = () => {
  const { goals, currentGoal, addGoal } = useDataStore()
  const filteredGoals = goals.filter((goal) => goal.id !== currentGoal?.id)
  const title = 'Next 100 Days: Your Learning Journey'
  const subtitle =
    ' Transform Your Skills, Knowledge, and Habits in Just 100 Days'

  return (
    <div className="bg-violet-100 ">
      <div className="flex flex-col p-8 h-full min-h-[100vh] m-auto max-w-[70%]">
        <Title mainTitle={title} paragraph={subtitle} />
        <Form addGoal={addGoal} />
        {currentGoal && (
          <Goal
            id={currentGoal.id}
            title={currentGoal.title}
            progress={currentGoal.progress}
            done={currentGoal.done}
          />
        )}
        <AllGoalsList goals={filteredGoals} />
      </div>
    </div>
  )
}

export default MainPage

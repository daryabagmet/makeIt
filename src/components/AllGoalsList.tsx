import Goal, { GoalType } from './Goal'

const AllGoalsList: React.FC<{ goals: GoalType[] }> = ({ goals }) => {
  if (goals.length === 0) return null
  
  return (
    <div data-testid="all-goals-list">
      {goals.map((goal: GoalType) => (
        <Goal key={goal.id} {...goal} />
      ))}
    </div>
  )
}

export default AllGoalsList

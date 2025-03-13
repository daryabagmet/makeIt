import Goal, { GoalType } from './Goal'

const AllGoalsList: React.FC<{ goals: GoalType[] }> = ({ goals }) => {
  return (
    <div>
      {goals.map((goal: GoalType) => (
        <Goal key={goal.id} {...goal} />
      ))}
    </div>
  )
}

export default AllGoalsList

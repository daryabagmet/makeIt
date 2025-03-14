interface GoalProgressPropsType {
  progress: number
}

const GoalProgress: React.FC<GoalProgressPropsType> = ({ progress }) => {
  return (
    <>
      <div className="text-gray-700">Progress: {progress} / 100</div>
      <div className="flex gap-0.5 w-full my-2">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className={`h-[20px] bg-gray-300 rounded-xs flex-1 ${
              index < progress ? 'bg-violet-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </>
  )
}

export default GoalProgress

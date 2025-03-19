import { useState } from 'react'

interface FormPropsType {
  addGoal: (goal: string) => void
}

const Form: React.FC<FormPropsType> = ({ addGoal }) => {
  const [field, setField] = useState<string>('')

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField(e.target.value)
  }

  const handleAddGoal = () => {
    addGoal(field)
    setField('')
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mx-auto my-10 w-full md:w-lg">
      <p className="text-xl text-gray-600 mb-4">
        What I want to achieve in next 100 days?
      </p>
      <div className="flex gap-2">
        <input
          type="text"
          name="goal"
          value={field}
          onChange={handleFieldChange}
          className="p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your goal"
          data-testid="add-goal-input"
        />
        <button
          onClick={handleAddGoal}
          className="w-40 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
          data-testid="add-goal-btn"
        >
          Make it!
        </button>
      </div>
    </div>
  )
}

export default Form

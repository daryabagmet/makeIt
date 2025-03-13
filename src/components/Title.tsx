import * as React from 'react'

const Title = React.memo(() => {
  return (
    <div className="flex flex-wrap items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4 w-full">
        Next 100 Days: Your Learning Journey
      </h1>
      <p className="text-xl text-gray-600 w-full">
        Transform Your Skills, Knowledge, and Habits in Just 100 Days
      </p>
    </div>
  )
})

export default Title

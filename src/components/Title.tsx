import * as React from 'react'

interface TitlePropsType {
  mainTitle: string
  paragraph?: string | null
}

const Title: React.FC<TitlePropsType> = React.memo(
  ({ mainTitle, paragraph = null }) => {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4 w-full">{mainTitle}</h1>
        {paragraph && (
          <p className="text-xl text-gray-600 w-full">{paragraph}</p>
        )}
      </div>
    )
  },
)

export default Title

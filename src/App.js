import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount((prevCount) => {
      return (prevCount + 1)
    })
  }
  return (
    <div className='px-32 py-12'>
      <div className='space-x-5'>
        {["Home", "Exercise1", "Exercise2", "Exercise3", "Exercise4", "Exercise5", "Exercise6", "Exercise7", "Exercise8", "Exercise9"].map((link, index) => {
          return (

            <a key={index} href={index} className='text-blue-900 underline'>{link}</a>
          )
        })}
      </div>
      <div className='p-40 space-y-4'>
        <h2 className='text-xl font-bold'>Button has clicked: {count} times</h2>
        <button onClick={handleCount} className='bg-blue-1 border p-2 ml-12'>click me </button>
      </div>

    </div>
  )
}

export default App
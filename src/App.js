const App = () => {

  const handleClick = () => {
    alert(" Clicked!")
  }
  return (
    <div className='px-32 py-12 space-y-12'>
      <div className='space-x-5'>
        {["Home", "Exercise1", "Exercise2", "Exercise3", "Exercise4", "Exercise5", "Exercise6", "Exercise7", "Exercise8", "Exercise9"].map((link, index) => {
          return (

            <a key={index} href={index} className='text-blue-900 underline'>{link}</a>
          )
        })}
      </div>
      <button onClick={handleClick} className='bg-blue-900 p-2 ml-32 text-white'>Click me </button>

    </div>
  )
}

export default App
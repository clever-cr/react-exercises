import Button from "./components/Button"
const App = () => {

  const nav = ["Home", "Exercise1", "Exercise2", "Exercise3", "Exercise4", "Exercise5", "Exercise6", "Exercise7", "Exercise8", "Exercise9"]
  return (
    <div className='px-32 py-12 space-y-12'>
      <div className='space-x-5'>
        {nav.map((link, index) => {
          return (

            <a key={index} href={index} className='text-blue-900 underline'>{link}</a>
          )
        })}
      </div>
      <div>
        <Button text=" 1" />
        <Button text=" 2" />
        <Button text="3" />
      </div>

    </div>
  )
}

export default App
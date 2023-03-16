import { useState } from 'react'
import page1 from './page1'
const App = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: ""
  })
  const handleChange = (event) => {

    setData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })

  }
  const handleClick = (event) => {
    event.preventDefault()
    alert(`Hello ${data.firstName} ${data.lastName} `)
  }
  return (
    <div className='p-32 '>
      <form className='flex flex-col w-48'>

        <input type="text" placeholder='First Name' name="firstName" value={data.firstName} onChange={handleChange} />
        <input t ype="text" name="lastName" placeholder='First Name' value={data.lastName} onChange={handleChange} />

      </form>
      <button className='bg-[#F0003C]' onClick={handleClick}>Greet me </button>

    </div>
  )
}

export default App
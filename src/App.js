import { useState } from 'react'
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
    <div className='p-32 space-y-5 w-[500px] bg-gray-50 m-12'>
      <form className='flex flex-col w-48- gap-2 w-full'>

        <input type="text" placeholder='First Name' name="firstName" value={data.firstName} onChange={handleChange} className="border-2 p-1 rounded-md border-gray-300 placeholder:text-black" />
        <input type="text" name="lastName" placeholder='last Name' value={data.lastName} onChange={handleChange} className="border-2 p-1 rounded-md border-gray-300 placeholder:text-black" />

      </form>
      <button className='bg-[#F0003C] p-3 rounded-md text-lg text-white w-full' onClick={handleClick}>Greet me </button>

    </div>
  )
}

export default App
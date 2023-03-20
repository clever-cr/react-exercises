import { useState, useEffect } from 'react'
import Card from "./components/Card"
const App = () => {
  const nav = ["Home", "Exercise1", "Exercise2", "Exercise3", "Exercise4", "Exercise5", "Exercise6", "Exercise7", "Exercise8", "Exercise9"]
  const [userData, setUserData] = useState([]);
  const get = async () => {
    const res = await fetch('https://random-data-api.com/api/users/random_user?size=10')
    const data = await res.json()
    setUserData(data)
  }
  useEffect(() => {
    get();
  }, [])

  return (
    <div className='px-32 py-12 space-y-12'>
      <button className='bg-red-600 text-white rounded-md mx-52 p-2 shadow-md' onClick={get}>Fetch Random</button>
      <Card data={userData} />

    </div >
  )
}

export default App
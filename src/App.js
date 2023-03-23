import { useState, useEffect } from 'react'
import Card from "./components/Card"

const App = () => {
  const nav = ["Home", "Exercise1", "Exercise2", "Exercise3", "Exercise4", "Exercise5", "Exercise6", "Exercise7", "Exercise8", "Exercise9"]
  const [usersData, setUsersData] = useState([]);

  const getUsers = async () => {
    const res = await fetch('https://random-data-api.com/api/users/random_user?size=10')
    const data = await res.json()
    setUsersData(data)
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
      <div className='space-x-5 text-center pt-8'>
        {nav.map((link, index) => <a key={index} href={index} className='text-blue-900 underline'>{link}</a>)}
      </div>
      <div className='px-32 py-12 space-y-12'>
        <button className='bg-red-600 text-white rounded-md mx-[512px] p-2 shadow-md' onClick={getUsers}>Fetch Random</button>
        <div className='flex flex-wrap bg-green-50 gap-12 p-12 place-content-center'>
          {usersData.map((item) => {
            return (
              <Card
                key={item.id}
                avatar={item.avatar}
                first_name={item.first_name}
                last_name={item.last_name}
                employment={item.employment.title}
              />)
          })}
        </div>
      </div >
    </div>

  )
}

export default App
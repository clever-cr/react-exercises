import { useState, useEffect } from 'react'
import Card from "./components/Card"
const App = () => {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    async function get() {
      const res = await fetch('https://random-data-api.com/api/users/random_user?size=10')
      const data = await res.json()
      setUserData(data)
    }
    get()
  }, [])

  return (
    <div>

      {/* <div>
        {userData.map((info, index) => {
          return (<div key={index}>{info.address.city}</div>)
        })}
      </div> */}
      {/* <div>{JSON.stringify(userData)}</div> */}
      <button className='bg-red-200' >Fetch Random</button>
      <Card />
    </div >
  )
}

export default App
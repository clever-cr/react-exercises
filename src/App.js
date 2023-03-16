import Card from './components/Card'
import data from "./data"
const App = () => {

  return (
    <div className='bg-blue-50 flex p-12 gap-12 h-screen' >
      {data.map((info, index) => {
        return (<Card key={index} setup={info.setup} punchline={info.punchline} />)

      })}
    </div>
  )
}

export default App
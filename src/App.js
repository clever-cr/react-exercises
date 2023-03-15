const App = () => {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  return (
    <div className='p-40'>
      {animals.map((animal, index) => {
        return (<li key={index}>{animal}</li>)
      })}
    </div>
  )
}

export default App
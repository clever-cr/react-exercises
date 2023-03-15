const List = ({ list = [] }) => {
  return (
    <div className='p-40'>
      {list.map((animal, index) => {
        return (<ul key={index}>{animal}</ul>)
      })}
    </div>
  )
}

export default List
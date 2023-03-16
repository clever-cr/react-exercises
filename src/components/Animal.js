const List = ({ list }) => {
  return (
    <div className="p-40">
      <div className='w-[200px] bg-blue-50'>
        {list.map((animal, index) => (<ul className="text-lg border px-12 p-2 border-gray-300" key={index}>{animal}</ul>))}
      </div>
    </div>

  )
}

export default List
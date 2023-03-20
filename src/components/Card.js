import "../App.css"
const card = ({ data }) => {
    return (
        <div className='grid grid-cols-2 bg-green-50 gap-12 p-12'>
            {data.map(user => (
                <div key={user.id} className="bg-white flex flex-col p-4 rounded-md w-[500px] flip-card ">
                    <div className='flip-card-inner'>
                        <div className='flip-card-front space-y-3'>
                            <img src={user.avatar} alt="avatar" />
                            <h1 className="font-bold">{user.first_name} {user.last_name}</h1>
                            <h1 className='ktext-lg'>{user.employment.title}</h1>
                        </div>
                        <div className="flip-card-back">
                            <h1 className='text-xl font-bold top-0'>More information here</h1>
                        </div>

                    </div>

                </div>
            ))
            }
        </div >
    )
}

export default card
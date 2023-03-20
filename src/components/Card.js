import "../App.css"
const Card = ({ avatar, first_name, last_name, employment }) => {
    return (
        <div>
            <div className="bg-white flex flex-col p-4 rounded-md w-[500px] flip-card ">
                <div className='flip-card-inner'>
                    <div className='flip-card-front space-y-3'>
                        <img src={avatar} alt="avatar" />
                        <h1 className="font-bold">{first_name} {last_name}</h1>
                        <h1 className='ktext-lg'>{employment}</h1>
                    </div>
                    <div className="flip-card-back">
                        <h1 className='text-xl font-bold top-0'>More information here</h1>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Card
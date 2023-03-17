const Card = ({ setup, punchline }) => {
    return (
        <div className='bg-white p-12 w-[400px] shadow-lg rounded-md space-y-4 h-[200px]'>
            <h2 className='text-xl font-bold text-center'>{setup}</h2>
            <h1 className='text-center'>{punchline}</h1>
        </div>
    )
}

export default Card
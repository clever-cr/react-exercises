const Button = ({ text }) => {
    const handleClick = (event) => {
        event.preventDefault();
        alert('You clicked on button' + text)
    }
    return (
        <button onClick={handleClick} className='bg-blue-900 p-2 ml-32 text-white'>button {text}</button>
    )
}

export default Button
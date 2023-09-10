import './TodoSearch.css'
function TodoSearch(){
    return (
        <input 
            placeholder="Buscas algo 🤔?"
            className='TodoSearch'
            onChange={(e) => {
                console.log(e);
                console.log(e.target.value)
            }}
        />
    )
}

export { TodoSearch }
import './TodoSearch.css'

function TodoSearch({
    searchValue,
    setSearchValue
}){

    return (
        <input
            className='TodoSearch'
            value={searchValue}
            onChange={(e) => {
                setSearchValue(e.target.value)
                console.log(searchValue)
            }}
        />
    )
}

export { TodoSearch }

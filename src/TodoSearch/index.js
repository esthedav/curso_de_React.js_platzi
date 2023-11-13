import './style.css'

function TodoSearch({
    searchValue,
    setSearchValue
}){
    const spanReset = <span
                            className='search-reset'
                            onClick={() => {
                                setSearchValue('')
                            }}
                        >
                        ✖</span>
    let searchReset = searchValue.length >= 1 ? spanReset : ''
    
    return (
        <>
            <input
                className='TodoSearch'
                placeholder='Dominar el mundo'
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                }}
            />
            {searchReset}
        </>
    )
}

export { TodoSearch }

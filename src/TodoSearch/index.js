import React from 'react'
import { TodoContext } from '../TodoContext'

import './style.css'

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  
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
        placeholder='Buscalo 🔍'
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
